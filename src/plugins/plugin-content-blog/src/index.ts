import {LoadContext, Plugin} from '@docusaurus/types'
import * as blogPluginExports from '@docusaurus/plugin-content-blog'
import {PluginOptions} from '@docusaurus/plugin-content-blog'
import {BlogContent} from './types'

const blogPlugin = blogPluginExports.default;

async function blogPluginEnhanced(
  context: LoadContext,
  options: PluginOptions,
): Promise<Plugin<BlogContent>> {
  const blogPluginInstance: any = await blogPlugin(context, options);

  return {
    ...blogPluginInstance,
    async contentLoaded({content, actions}) {
      // Create default plugin pages
      await blogPluginInstance.contentLoaded({content, actions});

      // Create your additional pages
      const {blogPosts, blogTags} = content;
      const {setGlobalData} = actions;

      setGlobalData({
        blogContent: content,
        blogs: blogPosts,
        tags: blogTags,
      })
    },
  }
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginEnhanced,
};
