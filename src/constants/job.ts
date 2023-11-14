
export interface JobInterface {
    year: string
    company: string
    jobTitle: string
    jobDescription: string
    produceImage: string
}

export type JobYear = JobInterface['year']

export const yearsEn: Array<JobYear> = [
    '07/2023 to date',
    '10/2022 - 06/2023',
    '02/2020 - 09/2022',
    '12/2014 - 01/2020',
    '07/2011 - 11/2014'
]

export const yearsCH: Array<JobYear> = [
    '07/2023 to date',
    '10/2022 - 06/2023',
    '02/2020 - 09/2022',
    '12/2014 - 01/2020',
    '07/2011 - 11/2014'
]

export const yearsWithLang = {
    CH: yearsCH,
    EN: yearsEn
}

const jobsEn: Array<JobInterface> = [
    {
        year: '07/2023 to date',
        company: 'Freelance',
        jobTitle: 'Software engineer',
        jobDescription: 'Building applications in my personal time. Full stack apps using a mix of the following tech: React, NextJS, Typescript, GraphQL, Styled Components & TailwindCSS, Strapi, AWS(EC2, RDS, S3), NodeJS, Git, VS Code',
        produceImage: '',
    },
    {
        year: '10/2022 - 06/2023',
        company: 'Duozhuayu',
        jobTitle: 'Frontend Developer',
        jobDescription: 'Building responsive to C user interface using react, NextJs, typescript, styled components, and storybook, using Axios to fetch data and redux to manage the state.; Building the in-house CMS system, Using react, typescript, ant-design and redux; Working with a dev team of 10 people, mutually review code and address pr feedbacks, split tasks and assign to team members regularly. ',
        produceImage: '',
    },
    {
        year: '02/2020 - 09/2022',
        company: 'UC Browser',
        jobTitle: 'Frontend Developer',
        jobDescription: 'Writing modern, performant, maintainable code for multiple content management systems.; Using different languages, frameworks, and libraries such as JavaScript, TypeScript, React, Redux, Ant Design, Styled Components, Node.js, WebSocket. ; Communicating with multi-disciplinary teams of engineers, product managers on a regular basis.;Providing effective troubleshooting and remediation for web applications. ',
        produceImage: '',
    },
    {
        year: '12/2014 - 01/2020',
        company: 'Toutiao',
        jobTitle: 'Content Operation Manager',
        jobDescription: 'Utilizing advanced personalized algorithms, in combination with human operation to recommend customized content and breaking news to users.;Collaborating with product managers and development teams to build, optimize, and updata multiple content management systems, enabling the operation team to promptly discover breaking news and trending topics.; Responsible for discussing with UI & UX about then content display and user interaction of website content, using sketches and Lark, etc. ',
        produceImage: '',
    },
    {
        year: '07/2011 - 11/2014',
        company: 'NetEase',
        jobTitle: 'Content Operations',
        jobDescription: 'Selecting major global news and provide recommendations on the website.;Planning special coverage for major news events, creating original content, H5 pages, image galleries, and more.',
        produceImage: '',
    }
];

const jobsCH: Array<JobInterface> = [
    {
        year: '07/2023 to date',
        company: '自由职业',
        jobTitle: '软件开发',
        jobDescription: '在我的个人时间里，我正在构建应用程序。我使用了一系列技术来开发全栈应用，包括：React、NextJS、Typescript、GraphQL、Styled Components 和 TailwindCSS、Strapi、AWS（EC2、RDS、S3）、NodeJS、Git 和 VS Code',
        produceImage: '',
    },
    {
        year: '10/2022 - 06/2023',
        company: '多抓鱼',
        jobTitle: '前端开发',
        jobDescription: '使用React、NextJs、Typescript和Styled Components构建响应式用户界面，使用Storybook进行UI开发，使用axios获取数据，使用Redux管理状态来构建ToC用户界面; 同时，使用React、Typescript、Ant Design和Redux来管理仓库库存的内部CMS系统; 与一个由10人组成的开发团队合作，定期相互审查代码并处理PR反馈，拆分任务并分配给团队成员',
        produceImage: '',
    },
    {
        year: '02/2020 - 09/2022',
        company: 'UC浏览器',
        jobTitle: '前端开发',
        jobDescription: '为多个内容管理系统编写现代化、高性能、可维护的代码。;使用不同的技术语言、框架和库，如JavaScript、TypeScript、React、Redux、Ant Design、Styled Components、Node.js、WebSocket。;与工程师、产品经理等多学科团队定期沟通；为Web应用程序提供有效的故障排除和修复服务。',
        produceImage: '',
    },
    {
        year: '12/2014 - 01/2020',
        company: '头条',
        jobTitle: '内容运营经理',
        jobDescription: '利用先进的个性化算法，结合人工运营，向用户推送定制内容和突发新闻。;与产品经理和开发团队合作，打造、优化和升级多个内容管理系统，使运营团队能够及时发现突发新闻和热门话题。;负责与UI和UX讨论和改进产品的UI与功能设计，提升用户体验。',
        produceImage: '',
    },
    {
        year: '07/2011 - 11/2014',
        company: '网易',
        jobTitle: '内容运营',
        jobDescription: '筛选全球重大实时新闻，在网站上提供推荐和展示。;为重大新闻事件策划特别报道，创作原创内容、H5页面、图集等。',
        produceImage: '',
    }
]

const jobsWithLang = {
    EN: jobsEn,
    CH: jobsCH
}

export default jobsWithLang;