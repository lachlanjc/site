import Head from 'next/head'

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  name = 'Lachlan Campbell', // site name
  title = '@lachlanjc', // page title
  description = 'Web designer-developer, currently working on climate at Watershed in San Francisco. NYU ’24, Interactive Media Arts. they/them',
  image = 'https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2Fcard.png?v=1582524337857',
  color = '#ff2467'
}) => (
  <Head>
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="og_url" property="og:url" content="https://lachlanjc.com/" />
    <meta key="tw_site" name="twitter:site" content="@lachlanjc" />

    <title>{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />

    {description && [
      <meta key="desc" name="description" content={description} />,
      <meta key="og_desc" property="og:description" content={description} />,
      <meta key="tw_desc" name="twitter:description" content={description} />
    ]}

    {image && [
      <meta key="og_img" property="og:image" content={image} />,
      <meta key="tw_card" name="twitter:card" content="summary_large_image" />,
      <meta key="tw_img" name="twitter:image" content={image} />
    ]}

    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />

    <script
      key="heap"
      type="text/javascript"
    >{`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};heap.load("2803421074");`}</script>
  </Head>
)

export default Meta
