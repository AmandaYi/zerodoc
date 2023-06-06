import {BrokenMarkdownLink, ContentPaths} from '@docusaurus/utils'
import {BlogPostMetadata} from '@docusaurus/plugin-content-blog'
// @ts-ignore
import {Tag} from '@docusaurus/types'
// @ts-ignore
import {Metadata as BlogPaginatedMetadata} from '@theme/BlogListPage'

export type BlogContentPaths = ContentPaths

export type BlogContent = {
  blogSidebarTitle: string
  blogPosts: BlogPost[]
  blogListPaginated: BlogPaginated[]
  blogTags: BlogTags
  blogTagsListPath: string
}

export type BlogTags = {
  [permalink: string]: BlogTag
}

export type BlogTag = Tag & {
  /** Blog post permalinks. */
  items: string[]
  pages: BlogPaginated[]
}

export type BlogPost = {
  id: string
  metadata: BlogPostMetadata
  content: string
}

export type BlogPaginated = {
  metadata: BlogPaginatedMetadata
  /** Blog post permalinks. */
  items: string[]
}

export type BlogBrokenMarkdownLink = BrokenMarkdownLink<BlogContentPaths>
export type BlogMarkdownLoaderOptions = {
  siteDir: string
  contentPaths: BlogContentPaths
  truncateMarker: RegExp
  sourceToPermalink: { [aliasedPath: string]: string }
  onBrokenMarkdownLink: (brokenMarkdownLink: BlogBrokenMarkdownLink) => void
}
