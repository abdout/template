// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Link,
//   Preview,
//   Section,
//   Tailwind,
//   Text,
// } from "@react-email/components";

// import { Icons } from "../shared/icons";

// export const MagicLinkEmail = ({
//   userEmail,
//   url,
// }: {
//   userEmail: string;
//   url: string;
// }) => {
//   return (
//     <Html>
//       <Head />
//       <Preview>Log in to SaaS Starter</Preview>
//       <Tailwind>
//         <Body className="bg-white my-auto mx-auto font-sans">
//           <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
//             <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
//               <strong>SaaS Starter</strong>
//             </Heading>
//             <Text className="text-black text-[14px] leading-[24px]">
//               Hello,
//             </Text>
//             <Text className="text-black text-[14px] leading-[24px]">
//               Click the link below to log in to SaaS Starter.
//             </Text>
//             <Section className="text-center mt-[32px] mb-[32px]">
//               <Button
//                 pX={20}
//                 pY={12}
//                 className="bg-[#000000] rounded-md text-white text-[12px] font-semibold no-underline text-center"
//                 href={url}
//               >
//                 Join the team →
//               </Button>
//             </Section>
//             <Text className="text-black text-[14px] leading-[24px]">
//               or copy and paste this URL into your browser:{" "}
//               <Link href={url} className="text-blue-600 no-underline">
//                 {url}
//               </Link>
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };

// Mock export for template
export const MagicLinkEmail = () => null;
