export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0a93fe86b5db954bea1ced',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ykdrt2zv',
                  apiId: '31aa2eaa-1a43-40c3-b414-1d02289efb9b'
                },
                {
                  buildHookId: '5e0a93fe58d42c74964d887e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-az2ov4fv',
                  apiId: 'c4107589-8ae2-43d4-9ef4-b594316da0e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wkhearn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-az2ov4fv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
