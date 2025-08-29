// TODO: Fix this when we turn strict mode on.

import { toc } from "mdast-util-toc"
import { remark } from "remark"
import { visit } from "unist-util-visit"

const textTypes = ["text", "emphasis", "strong", "inlineCode"]

interface Node {
  type: string;
  value?: string;
  children?: Node[];
  url?: string;
}

function flattenNode(node: Node): string {
  const p: string[] = []
  visit(node, (node: Node) => {
    if (!textTypes.includes(node.type)) return
    if (node.value) {
      p.push(node.value)
    }
  })
  return p.join(``)
}

interface Item {
  title: string
  url: string
  items?: Item[]
}

interface Items {
  items?: Item[]
}

interface CurrentItem {
  url?: string;
  title?: string;
  items?: Items[];
}

function getItems(node: Node, current: CurrentItem): Items {
  if (!node) {
    return {}
  }

  if (node.type === "paragraph") {
    visit(node, (item: Node) => {
      if (item.type === "link") {
        current.url = item.url
        current.title = flattenNode(node)
      }

      if (item.type === "text") {
        current.title = flattenNode(node)
      }
    })

    return current
  }

  if (node.type === "list") {
    current.items = node.children?.map((i: Node) => getItems(i, {})) || []

    return current
  } else if (node.type === "listItem") {
    const heading = getItems(node.children?.[0] || {}, {})

    if (node.children && node.children.length > 1) {
      getItems(node.children[1], heading)
    }

    return heading
  }

  return {}
}

const getToc = () => (node: Node, file: { data: Items }) => {
  const table = toc(node)
  file.data = getItems(table.map, {})
}

export type TableOfContents = Items

export async function getTableOfContents(
  content: string
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content)

  return result.data
}
