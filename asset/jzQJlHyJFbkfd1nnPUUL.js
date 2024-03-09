var _=Object.defineProperty;var k=(l,e,t)=>e in l?_(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var s=(l,e,t)=>(k(l,typeof e!="symbol"?e+"":e,t),t);import{ac as f,ad as G,ab as M,aA as r,aB as o,P as S,aC as d,O as m,C as h}from"./D1zPwdc9cyvUD_PRY_dc.js";import{L as $}from"./85yZmE5PqfcNKC64qTgv.js";import{d as w}from"./fynzmAtJ_PmpHXIxRwqH.js";var H=Object.defineProperty,R=Object.getOwnPropertyDescriptor,u=(l,e,t,i)=>{for(var n=i>1?void 0:i?R(e,t):e,a=l.length-1,c;a>=0;a--)(c=l[a])&&(n=(i?c(e,t,n):c(n))||n);return i&&n&&H(e,t,n),n};const D="9",T="json",v=1e4;class g{constructor(e){s(this,"logger",new $("GatewayConnectionStore"));s(this,"socket",null);s(this,"sessionId",null);s(this,"session");s(this,"readyState",WebSocket.CLOSED);s(this,"app");s(this,"url");s(this,"heartbeatInterval",null);s(this,"heartbeater",null);s(this,"initialHeartbeatTimeout",null);s(this,"dispatchHandlers",new Map);s(this,"connectionStartTime");s(this,"identifyStartTime");s(this,"sequence",0);s(this,"heartbeatAck",!0);s(this,"lazyRequestChannels",new Map);s(this,"reconnectTimeout",0);s(this,"onopen",()=>{this.logger.debug(`[Connected] ${this.url} (took ${Date.now()-this.connectionStartTime}ms)`),this.readyState=WebSocket.OPEN,this.reconnectTimeout=0,this.handleIdentify()});s(this,"onmessage",e=>{const t=JSON.parse(e.data);switch(t.op!==o.Dispatch&&this.logger.debug(`[Gateway] -> ${t.op}`,t),t.op){case o.Dispatch:this.handleDispatch(t);break;case o.Heartbeat:this.sendHeartbeat();break;case o.Reconnect:this.handleReconnect();break;case o.InvalidSession:this.handleInvalidSession(t.d);break;case o.Hello:this.handleHello(t.d);break;case o.HeartbeatAck:this.handleHeartbeatAck();break;default:this.logger.debug("Received unknown opcode");break}});s(this,"onerror",e=>{this.logger.error("[Gateway] Socket Error",e)});s(this,"onclose",e=>{this.readyState=WebSocket.CLOSED,this.handleClose(e.code)});s(this,"sendJson",e=>{if(!this.socket){this.logger.error("Socket is not open");return}if(this.socket.readyState!==WebSocket.OPEN){this.logger.error(`Socket is not open; readyState: ${this.socket.readyState}`);return}this.logger.debug(`[Gateway] <- ${e.op}`,e),this.socket.send(JSON.stringify(e))});s(this,"handleIdentify",()=>{if(this.logger.debug("handleIdentify called"),!this.app.token)return this.logger.error("Token shouldn't be null here");this.identifyStartTime=Date.now();const e={op:o.Identify,d:{token:this.app.token,capabilities:16381,intents:3276799,properties:{release_channel:"dev"},compress:!1,presence:{status:S.Online,since:Date.now(),activities:[],afk:!1}}};this.sendJson(e)});s(this,"handleInvalidSession",e=>{this.cleanup(),this.logger.debug(`Received invalid session; Can Resume: ${e}`)});s(this,"handleHello",e=>{this.heartbeatInterval=e.heartbeat_interval,this.reconnectTimeout=this.heartbeatInterval,this.logger.info(`[Hello] heartbeat interval: ${e.heartbeat_interval} (took ${Date.now()-this.connectionStartTime}ms)`),this.startHeartbeater()});s(this,"handleClose",e=>{if(this.cleanup(),e===4004){this.logger.warn("closed because of authentication failure."),this.app.logout(),this.reset(),this.app.setAppLoading(!1);return}e!==1001&&(this.reconnectTimeout===0?this.reconnectTimeout=v:this.reconnectTimeout+=v,this.logger.debug(`Websocket closed with code ${e}; Will reconnect in ${(this.reconnectTimeout/1e3).toFixed(2)} seconds.`),this.startReconnect())});s(this,"reset",()=>{this.sessionId=null,this.sequence=0,this.readyState=WebSocket.CLOSED});s(this,"startHeartbeater",()=>{this.heartbeater&&(clearInterval(this.heartbeater),this.heartbeater=null);const e=()=>{this.heartbeatAck?(this.heartbeatAck=!1,this.sendHeartbeat()):this.handleHeartbeatTimeout()};this.initialHeartbeatTimeout=setTimeout(()=>{this.initialHeartbeatTimeout=null,this.heartbeater=setInterval(e,this.heartbeatInterval),e()},Math.floor(Math.random()*this.heartbeatInterval))});s(this,"stopHeartbeater",()=>{this.heartbeater&&(clearInterval(this.heartbeater),this.heartbeater=null),this.initialHeartbeatTimeout&&(clearTimeout(this.initialHeartbeatTimeout),this.initialHeartbeatTimeout=null)});s(this,"handleHeartbeatTimeout",()=>{var e;this.logger.warn(`[Heartbeat ACK Timeout] should reconnect in ${(v/1e3).toFixed(2)} seconds`),(e=this.socket)==null||e.close(4009),this.cleanup(),this.reset(),this.startReconnect()});s(this,"sendHeartbeat",()=>{const e={op:o.Heartbeat,d:this.sequence};this.logger.debug("Sending heartbeat"),this.sendJson(e)});s(this,"cleanup",()=>{this.logger.debug("Cleaning up"),this.stopHeartbeater(),this.socket=null});s(this,"handleHeartbeatAck",()=>{this.logger.debug("Received heartbeat ack"),this.heartbeatAck=!0});s(this,"handleDispatch",e=>{const{d:t,t:i,s:n}=e;this.logger.debug(`[Gateway] -> ${i}`,t),this.sequence=n;const a=this.dispatchHandlers.get(i);if(!a){this.logger.debug(`No handler for dispatch event ${i}`);return}a(t)});s(this,"onResumed",()=>{this.logger.debug("Resumed")});s(this,"onReady",e=>{this.logger.info(`[Ready] took ${Date.now()-this.connectionStartTime}ms`);const{session_id:t,guilds:i,users:n,user:a,private_channels:c,sessions:y}=e;if(this.sessionId=t,this.session=y==null?void 0:y.find(C=>C.session_id===t),this.app.setUser(a),this.app.guilds.addAll(i),this.app.guilds.setInitialGuildsLoaded(),n&&this.app.users.addAll(n),this.app.privateChannels.addAll(c),e.merged_members)for(const C of e.merged_members)for(const p of C){const b=this.app.guilds.get(p.guild_id);b||this.logger.warn(`[Ready] Guild ${p.guild_id} not found for member ${p.id}`),b==null||b.members.add(p)}this.reconnectTimeout=0,this.app.setGatewayReady(!0)});s(this,"onChannelOpen",(e,t)=>{if((this.lazyRequestChannels.get(e)??[]).includes(t))return;const n={guild_id:e,channels:{[t]:[[0,99]]}};this.lazyRequestChannels.set(e,[t]),this.sendJson({op:o.LazyRequest,d:n})});s(this,"onGuildCreate",e=>{this.logger.debug("Received guild create event"),m(()=>{this.app.guilds.add({...e,...e.properties})})});s(this,"onGuildUpdate",e=>{var t;this.logger.debug("Received guild update event"),(t=this.app.guilds.get(e.id))==null||t.update(e)});s(this,"onGuildDelete",e=>{this.logger.debug("Received guild delete event"),m(()=>{this.app.guilds.remove(e.id)})});s(this,"onGuildMemberAdd",e=>{var i;this.logger.debug("Received GuildMemberAdd event");const t=this.app.guilds.get(e.guild_id);if(!t){this.logger.warn(`[GuildMemberAdd] Guild ${e.guild_id} not found for member ${(i=e.user)==null?void 0:i.id}`);return}t.members.add(e)});s(this,"onGuildMemberRemove",e=>{this.logger.debug("Received GuildMemberRemove event");const t=this.app.guilds.get(e.guild_id);if(!t){this.logger.warn(`[GuildMemberRemove] Guild ${e.guild_id} not found for member ${e.user.id}`);return}t.members.remove(e.user.id)});s(this,"onGuildMemberUpdate",e=>{this.logger.debug("Received GuildMemberUpdate event");const t=this.app.guilds.get(e.guild_id);if(!t){this.logger.warn(`[GuildMemberUpdate] Guild ${e.guild_id} not found for member ${e.user.id}`);return}t.members.update(e)});s(this,"onGuildMemberListUpdate",e=>{this.logger.debug("Received GuildMemberListUpdate event");const{guild_id:t}=e,i=this.app.guilds.get(t);if(!i){this.logger.warn(`[GuildMemberListUpdate] Guild ${t} not found`);return}i.updateMemberList(e)});s(this,"onChannelCreate",e=>{if(e.type===h.DM||e.type===h.GroupDM){this.app.privateChannels.add(e);return}const t=this.app.guilds.get(e.guild_id);if(!t){this.logger.warn(`[ChannelCreate] Guild ${e.guild_id} not found for channel ${e.id}`);return}t.addChannel(e)});s(this,"onChannelUpdate",e=>{if(e.type===h.DM||e.type===h.GroupDM){this.app.privateChannels.update(e);return}const t=this.app.guilds.get(e.guild_id);if(!t){this.logger.warn(`[ChannelUpdate] Guild ${e.guild_id} not found for channel ${e.id}`);return}t.updateChannel(e)});s(this,"onChannelDelete",e=>{if(e.type===h.DM||e.type===h.GroupDM){this.app.privateChannels.remove(e.id);return}const t=this.app.guilds.get(e.guild_id);if(!t){this.logger.warn(`[ChannelDelete] Guild ${e.guild_id} not found for channel ${e.id}`);return}t.removeChannel(e.id)});s(this,"onMessageCreate",e=>{if(!this.app.guilds.get(e.guild_id)){this.logger.warn(`[MessageCreate] Guild ${e.guild_id} not found for channel ${e.id}`);return}const i=this.app.channels.get(e.channel_id);if(!i){this.logger.warn(`[MessageCreate] Channel ${e.channel_id} not found for message ${e.id}`);return}i.messages.add(e),this.app.queue.handleIncomingMessage(e)});s(this,"onMessageUpdate",e=>{if(!this.app.guilds.get(e.guild_id)){this.logger.warn(`[MessageUpdate] Guild ${e.guild_id} not found for channel ${e.id}`);return}const i=this.app.channels.get(e.channel_id);if(!i){this.logger.warn(`[MessageUpdate] Channel ${e.channel_id} not found for message ${e.id}`);return}i.messages.update(e)});s(this,"onMessageDelete",e=>{if(!this.app.guilds.get(e.guild_id)){this.logger.warn(`[MessageDelete] Guild ${e.guild_id} not found for channel ${e.id}`);return}const i=this.app.channels.get(e.channel_id);if(!i){this.logger.warn(`[MessageDelete] Channel ${e.channel_id} not found for message ${e.id}`);return}i.messages.remove(e.id)});s(this,"onMessageBulkDelete",e=>{if(!this.app.guilds.get(e.guild_id)){this.logger.warn(`[MessageDeleteBulk] Guild ${e.guild_id} not found.`);return}const i=this.app.channels.get(e.channel_id);if(!i){this.logger.warn(`[MessageDeleteBulk] Channel ${e.channel_id} not found.`);return}for(const n of e.ids)i.messages.remove(n)});s(this,"onPresenceUpdate",e=>{this.app.presences.update(e)});s(this,"onTypingStart",e=>{var a;if(!this.app.guilds.get(e.guild_id)){this.logger.warn(`[TypingStart] Guild ${e.guild_id} not found for channel ${e.channel_id}`);return}const i=this.app.channels.get(e.channel_id);if(!i){this.logger.warn(`[TypingStart] Channel ${e.channel_id} not found`);return}const n=w(()=>{this.logger.debug(`[TypingStart] ${e.user_id} has stopped typing in ${i.id}`),m(()=>i.typingIds.delete(e.user_id))},12e3);i.typingIds.has(e.user_id)?(this.logger.debug(`[TypingStart] ${e.user_id} is still typing in ${i.id}`),(a=i.typingIds.get(e.user_id))==null||a()):(m(()=>i.typingIds.set(e.user_id,n)),n())});s(this,"onUserUpdate",e=>{this.app.users.update(e)});this.app=e,M(this)}async connect(e){if(!this.url){const t=new URL(e);t.searchParams.append("v",D),t.searchParams.append("encoding",T),this.url=t.href}this.logger.debug(`[Connect] ${this.url}`),this.connectionStartTime=Date.now(),this.socket=new WebSocket(this.url),this.readyState=WebSocket.CONNECTING,this.setupListeners(),this.setupDispatchHandler()}async disconnect(e,t){var i;this.socket&&(this.readyState=WebSocket.CLOSING,this.logger.debug(`[Disconnect] ${this.url}`),(i=this.socket)==null||i.close(e,t))}startReconnect(){setTimeout(()=>{this.logger.debug("Starting reconnect..."),this.connect(this.url)},this.reconnectTimeout)}setupListeners(){this.socket.onopen=this.onopen,this.socket.onmessage=this.onmessage,this.socket.onerror=this.onerror,this.socket.onclose=this.onclose}setupDispatchHandler(){this.dispatchHandlers.set(r.Ready,this.onReady),this.dispatchHandlers.set(r.Resumed,this.onResumed),this.dispatchHandlers.set(r.GuildCreate,this.onGuildCreate),this.dispatchHandlers.set(r.GuildUpdate,this.onGuildUpdate),this.dispatchHandlers.set(r.GuildDelete,this.onGuildDelete),this.dispatchHandlers.set(r.GuildMemberAdd,this.onGuildMemberAdd),this.dispatchHandlers.set(r.GuildMemberRemove,this.onGuildMemberRemove),this.dispatchHandlers.set(r.GuildMemberUpdate,this.onGuildMemberUpdate),this.dispatchHandlers.set(r.GuildMemberListUpdate,this.onGuildMemberListUpdate),this.dispatchHandlers.set(r.ChannelCreate,this.onChannelCreate),this.dispatchHandlers.set(r.ChannelUpdate,this.onChannelUpdate),this.dispatchHandlers.set(r.ChannelDelete,this.onChannelDelete),this.dispatchHandlers.set(r.MessageCreate,this.onMessageCreate),this.dispatchHandlers.set(r.MessageUpdate,this.onMessageUpdate),this.dispatchHandlers.set(r.MessageDelete,this.onMessageDelete),this.dispatchHandlers.set(r.MessageDeleteBulk,this.onMessageBulkDelete),this.dispatchHandlers.set(r.PresenceUpdate,this.onPresenceUpdate),this.dispatchHandlers.set(r.TypingStart,this.onTypingStart),this.dispatchHandlers.set(r.UserUpdate,this.onUserUpdate)}handleReconnect(){this.cleanup(),this.logger.debug("Received reconnect"),this.startReconnect()}handleResume(){if(this.logger.debug("handleResume called"),!this.app.token)return this.logger.error("Token shouldn't be null here");this.sendJson({op:o.Resume,d:{token:this.app.token,session_id:this.sessionId,seq:this.sequence}})}canReconnect(e){if(!e)return!0;switch(e){case d.AuthenticationFailed:case d.InvalidShard:case d.ShardingRequired:case d.InvalidAPIVersion:case d.InvalidIntents:case d.DisallowedIntents:return!1;default:return!0}}}u([f],g.prototype,"socket",2);u([f],g.prototype,"sessionId",2);u([f],g.prototype,"session",2);u([f],g.prototype,"readyState",2);u([G],g.prototype,"connect",1);u([G],g.prototype,"disconnect",1);export{g as G};
//# sourceMappingURL=jzQJlHyJFbkfd1nnPUUL.js.map
