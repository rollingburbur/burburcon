﻿configData = {
  numChatMax        : 12,
  personalColor     : true,
  badgeVisible      : true,
  badgeChannelId    : 233783419,
  themeURI          : "",
  theme             : "default",
  themeName         : "",
  msgExistDuration  : 0,
  msgAniDuration    : -1,
  debugLevel        : 2,
  useDisplayName    : true,
  loadCheerImgs     : true,
  loadTwitchCons    : true,
  consRealSubsOnly  : true,
  loadDcCons        : true,
  dcConsURI         : "",
  subMonthsMsg      : "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg         : "☆ {!0:{bits} 비트 }후원 ! ☆",
  clipReplaceMsg    : "[이거슨클립]",
  linkReplaceMsg    : "[이거슨링크]",
  webSocket         : "wss://irc-ws.chat.twitch.tv:443",
  nick              : "justinfan16831",
  pass              : "foobar",
  channel           : "#rollingburbur",
  retryInterval     : 2,
  allMessageHandle  : false,
  muteUser          : ["Nightbot"],
  deleteBanMsg      : true,
  commands          : [
    {exe:"clear", msg:"!!clear"},
    {exe:"theme", msg:"!!theme"},
    {exe:"load", msg:"!!load"},
    {exe:"scale", msg:"!!scale"}
  ],
  replaceMsgs       : [
    {orig:/^!{1,2}[a-zA-Z]+/, to:"{no_display}"}     // 봇 호출 영문 메세지 미표시
  ]
};
