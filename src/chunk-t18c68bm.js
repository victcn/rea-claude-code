// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K } from "./chunk-3pqddg8f.js";

var IJn = 3e4;

class t {
  activeSocketPath=void 0;
  connectedClients=new Set;
  onEnqueue=null;
  onRename=null;
  onEnableRemoteControl=null;
  onPeerMessageStatus=null;
  processingChain=Promise.resolve();
  activeTokens=void 0;
  activeKeyFile=void 0;
  authRequired=!1;
  authOkReported=!1;
  authDropReported=!1;
  firstLineDeadlineMs=IJn;
  silentDropReported=!1;
  lastStartFailureCause=void 0;
  lastStartDegradedCause=void 0;
  lastStartFailureDetail=void 0;
  startInFlight=!1;
  peerDirOwnerUids=[];
  reset() {
    this.onEnqueue = null, this.onRename = null, this.onEnableRemoteControl = null, 
    this.onPeerMessageStatus = null, this.activeSocketPath = void 0, this.connectedClients.clear(), 
    this.processingChain = Promise.resolve(), this.activeTokens = void 0, this.activeKeyFile = void 0, 
    this.authRequired = !1, this.authOkReported = !1, this.authDropReported = !1, this.firstLineDeadlineMs = IJn, 
    this.silentDropReported = !1, this.lastStartFailureCause = void 0, this.lastStartDegradedCause = void 0, 
    this.lastStartFailureDetail = void 0, this.startInFlight = !1, this.peerDirOwnerUids = [];
  }
}

function _yn(e) {
  if (e.startInFlight || e.activeSocketPath !== void 0) return;
  switch (e.lastStartFailureCause) {
   case "socket_dir_refused":
    return e.lastStartFailureDetail !== void 0 ? `its socket directory could not be set up: ${e.lastStartFailureDetail}` : "its socket directory could not be set up";

   case "path_refused":
    return "its socket path is not a usable local address";

   case "bind_failed":
    return "it could not be started";

   case "key_publish_failed":
    return "its peer key could not be published";

   case "post_bind_setup_failed":
    return "setting it up after bind failed";

   case void 0:
    return;
  }
}

var oWt = new K(() => new t);

export { IJn, _yn, oWt };
