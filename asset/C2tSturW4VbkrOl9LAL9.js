import{j as t,Q as m}from"./D1zPwdc9cyvUD_PRY_dc.js";import{m as d}from"./BzY13BMkSvTsia-Ovd-e.js";import"./D7aba9bBOyNd9qKKhgUB.js";import{I as p}from"./Zr3IUOdpzckDlmHgYvaT.js";const b="_embed_iwph3_1",h="_embedGap_iwph3_5",w="_embedImage_iwph3_18",f="_website_iwph3_23",F="_embedProvider_iwph3_43",y="_embedAuthor_iwph3_50",I="_embedAuthorIcon_iwph3_56",g="_embedAuthorName_iwph3_64",x="_embedAuthorNameLink_iwph3_72",v="_embedTitle_iwph3_80",G="_embedTitleLink_iwph3_93",T="_embedDescription_iwph3_101",k="_embedFooter_iwph3_111",A="_embedFooterIcon_iwph3_117",N="_embedFooterText_iwph3_125",j="_embedFooterSeperator_iwph3_133",z="_embedFields_iwph3_139",V="_embedField_iwph3_139",B="_embedFieldName_iwph3_151",S="_embedFieldValue_iwph3_156",L="_embedThumbnail_iwph3_161",C="_image_iwph3_166",E="_embedGifIcon_iwph3_176",P="_embedGifIconBg_iwph3_182",r={embed:b,embedGap:h,embedImage:w,website:f,embedProvider:F,embedAuthor:y,embedAuthorIcon:I,embedAuthorName:g,embedAuthorNameLink:x,embedTitle:v,embedTitleLink:G,embedDescription:T,embedFooter:k,embedFooterIcon:A,embedFooterText:N,embedFooterSeperator:j,embedFields:z,embedField:V,embedFieldName:B,embedFieldValue:S,embedThumbnail:L,image:C,embedGifIcon:E,embedGifIconBg:P};function q({embed:e,width:n,height:s,thumbnail:a}){var c,u;switch((c=e.provider)==null?void 0:c.name){case"YouTube":{if(!((u=e.video)!=null&&u.url))return null;const o=e.video.url;return t.jsx("iframe",{loading:"lazy",src:o,allowFullScreen:!0,style:{height:s}})}case"Spotify":{const o=e.url;if(!o)break;const i=o.match(/https:\/\/open\.spotify\.com\/(track|album|playlist)\/([a-zA-Z0-9]+)/);if(!i)break;const l=i[1],_=i[2];return t.jsx("iframe",{style:{width:"400px",height:"80px",borderRadius:12},src:`https://open.spotify.com/embed/${l}/${_}`,frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})}case"Soundcloud":return t.jsx("iframe",{src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(e.url)}&color=%23FF7F50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`,frameBorder:"0",scrolling:"no",loading:"lazy",style:{height:s}});case"Streamable":{const o=e.url;if(!o)break;const i=o.match(/https:\/\/streamable\.com\/([a-zA-Z0-9]+)/);if(!i)break;const l=i[1];return t.jsx("iframe",{src:`https://streamable.com/e/${l}?quality=highest`,frameBorder:"0",allowFullScreen:!0,seamless:!0,loading:"lazy",style:{height:s}})}default:if(e.video&&!a){const o=e.video.url;return t.jsxs("div",{children:[t.jsx("video",{className:r.embedImage,style:{width:n,height:s},src:o,loop:e.type===m.GIFV,controls:e.type!==m.GIFV,autoPlay:e.type===m.GIFV,muted:e.type===m.GIFV?!0:void 0,onClick:()=>{d.push({type:"image_viewer",attachment:e.video,isVideo:!0})}}),e.type===m.GIFV&&t.jsxs("div",{children:[t.jsx("div",{className:r.embedGifIconBg}),t.jsx(p,{icon:"mdiFileGifBox",size:1,className:r.embedGifIcon})]})]})}else if(e.image&&!a){const o=e.image.url;return t.jsx("img",{className:r.embedImage,src:o,loading:"lazy",style:{width:"100%",height:"100%"},onClick:()=>{d.push({type:"image_viewer",attachment:e.image})}})}else if(e.thumbnail){const o=e.thumbnail.url;return t.jsx("img",{className:a?r.embedThumbnail:r.embedImage,src:o,loading:"lazy",style:{width:n,height:s},onClick:()=>{d.push({type:"image_viewer",attachment:e.thumbnail})}})}}return null}export{q as E,r as s};
//# sourceMappingURL=C2tSturW4VbkrOl9LAL9.js.map