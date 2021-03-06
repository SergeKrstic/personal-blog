import React from 'react';
import { Link, graphql } from 'gatsby';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

import 'katex/dist/katex.min.css';

interface Props {
    data: {
        markdownRemark: any;
        next: any;
        previous: any;
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    pageContext: any;
    location: any;
}

const BlogPostTemplate = ({ data, location }: Props) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const { previous, next } = data;
    const disqusConfig = { identifier: post.fields.slug, title: siteTitle };

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
            <article className="blog-post" itemScope itemType="http://schema.org/Article">
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                    <CommentCount config={disqusConfig} placeholder={'...'} />
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
                <hr />
                <Disqus {...disqusConfig} />
                <footer>
                    <Bio />
                </footer>
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={`/${previous.fields.slug}`} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={`/${next.fields.slug}`} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
            fields {
                slug
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
