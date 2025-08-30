import React from 'react'

const introduction = () => {
    return (
        <div className='space-y-6'>
            <h4 className='text-2xl leading-relaxed'>
                Automate the boring. at Databayt we&apos;re building codebase for business automation, one atomic component at a time. Every line of code is open source, every contribution is valued, and every developer may shape the future of how businesses operate.
            </h4>
            <h4 className='text-2xl leading-relaxed'>
                We sell the origin of all value — we sell Time, the currency that drives the world — what if you could reclaim yours and focus on what truly matters? It&apos;s more than a service — it&apos;s an escape from the matrix. A restoration of time through the elimination of repetitive tasks, streamlined operations, and automated processes. Break free. Reclaim your hours.
            </h4>
            <h4 className='text-2xl leading-relaxed'>
                The Repository of Wonders. Think of our codebase as a living library where every contribution becomes part of something greater. From atomic components to complete templates, from blocks to micro-services to full automation solutions—we&apos;re creating the building blocks that will power tomorrow&apos;s businesses.
            </h4>
            <h4 className='text-2xl leading-relaxed'>
                Follow along as we figure this out together. This isn&apos;t just about building software; it&apos;s about creating a collaborative ecosystem where developers, businesses, and innovators unite to solve real problems. Every contribution you make doesn&apos;t just help one project—it becomes part of a growing foundation that serves countless businesses worldwide.
            </h4>
        </div>
    )
}

const whatWeDo = () => {
    return (
        <div className='space-y-4 py-10'>
            <h4 className='text-2xl font-semibold'>What We Do</h4>
            <p className='text-white/80'>Development - Enterprise-grade applications and platforms</p>
            <p className='text-white/80'>Automation - Streamlined workflows and process optimization</p>
            <p className='text-white/80'>Consulting - Technical expertise and implementation support</p>
            <p className='text-white/80'>Open Source - Community-driven development and innovation</p>
        </div>
    )
}

const businessModel = () => {
    return (
        <div className='space-y-4 py-10'>
            <h4 className='text-2xl font-semibold'>Business Model</h4>
            <h4 className='text-xl font-medium'>Per Project</h4>
            <p className='text-white/80'>Custom solutions tailored to specific client requirements and business processes. Each project delivers unique automation systems designed to solve particular challenges and operational needs.</p>

            <h4 className='text-xl font-medium'>Partners</h4>
            <p className='text-white/80'>Partnership opportunities for businesses seeking to outsource technology development, access specialized talent for temporary projects and specific technical expertise.</p>

            <h4 className='text-xl font-medium'>Codebase</h4>
            <p className='text-white/80'>Codebase executes the majority of the task, through accumulated, reusable components. Contributors who expand this foundation earn a share of the value it generates.</p>

            <h4 className='text-xl font-medium'>SaaS</h4>
            <p className='text-white/80'>Ready-to-deploy software products sold to multiple organizations with similar needs. act as a go-to central hub for businesses seeking automation solutions.</p>
        </div>
    )
}

const coreValues = () => {
    return (
        <div className='space-y-4 py-10'>
            <h4 className='text-2xl font-semibold'>Core Values</h4>
            <h4 className='text-xl font-medium'>Transparency</h4>
            <p className='text-white/80'>Every decision, from technical architecture to business strategy, is documented and accessible to the community. We use GitHub to manage our codebase and discussions, ensuring transparency, traceability, and open collaboration. Contributions are publicly tracked, so every developer can see their impact and know the process is clear and fair. We believe this openness builds trust and enables better contributions.</p>

            <h4 className='text-xl font-medium'>Innovation</h4>
            <p className='text-white/80'>Our best ideas come from our diverse community of developers, business professionals, and users. We actively encourage contributions and value every perspective. We&apos;re actively building in: Business Automation, Data Analytics, AI Agents, Blockchain, and Distributed Computing.</p>

            <h4 className='text-xl font-medium'>Growth</h4>
            <p className='text-white/80'>We balance rapid innovation with long-term sustainability, ensuring our solutions remain robust and our business model benefits all stakeholders.</p>

            <h4 className='text-xl font-medium'>Excellence</h4>
            <p className='text-white/80'>Every product we ship meets the highest standards of quality, security, and performance. Our reputation is built on reliable, enterprise-grade solutions.</p>
        </div>
    )
}

export const Content = () => {
    return (
        <div className='md:max-w-[80%] py-40'>
            {introduction()}
            {whatWeDo()}
            {businessModel()}
            {coreValues()}
        </div>
    );
};

