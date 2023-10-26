export interface ProjectInterface {
    name: string
    desc: string
    technologies: Array<string>,
    github: string,
    demo?: string
}

export const projectCH: Array<ProjectInterface> = [
    {
        name: 'Superprompt',
        desc: '一个响应式的网站页面，用户可以创作、编辑、搜索、删除prompt。',
        technologies: ['React', 'Next.js', 'NextAuth', 'Typescript', 'Google OAuth', 'MongoDB', 'Vercel'],
        github: 'https://github.com/coding-cooking/project_superprompt',
    },
    {
        name: 'Alias Blog',
        desc: '一个展示portfolio、创建博客的网站，提供了谷歌第三方登录，用mongoDB存储数据。',
        technologies: ['React', 'Next.js', 'NextAuth', 'Typescript', 'Google OAuth', 'MongoDB', 'Vercel'],
        github: 'https://github.com/coding-cooking/next_mongo',
    },
    {
        name: 'PostList',
        desc: '一个创作、展示post的网站，用了Redux、Redux-thunk管理state。',
        technologies: ['React', 'Redux', 'Typescript'],
        github: 'https://github.com/coding-cooking/redux_post',
    },

]

export const projectEN: Array<ProjectInterface> = [
    {
        name: 'Superprompt',
        desc: 'A responsive website that user can use to create, edit, search, and delete prompts.',
        technologies: ['React', 'Next.js', 'NextAuth', 'Typescript', 'Google OAuth', 'MongoDB'],
        github: 'https://github.com/coding-cooking/project_superprompt',
    },
    {
        name: 'Alias Blog',
        desc: 'A website that showcases a portfolio and allows users to create blogs, offering Google third-party login and using MongoDB to store data.',
        technologies: ['React', 'Next.js', 'NextAuth', 'Typescript', 'Google OAuth', 'MongoDB'],
        github: 'https://github.com/coding-cooking/next_mongo',
    },
    {
        name: 'PostList',
        desc: 'A website for creating and displaying posts that uses Redux and Redux-thunk to manage state.',
        technologies: ['React',  'Redux', 'Typescript'],
        github: 'https://github.com/coding-cooking/redux_post'
    },
]

const projectWithLang = {
    CH: projectCH,
    EN: projectEN
}

export default projectWithLang;