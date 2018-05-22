import socketIOClient from 'socket.io-client';

export const LIVE_TICKERETH = "LIVE_TICKERETH";
export const LIVE_TICKERBCH = "LIVE_TICKERBCH";
export const LIVE_TICKERXRP = "LIVE_TICKERXRP";
export const LIVE_TICKERLTC = "LIVE_TICKERLTC";
export const LIVE_TICKERXMR = "LIVE_TICKERXMR";
export const LIVE_TICKERETC = "LIVE_TICKERETC";
export const LIVE_TICKERIOT = "LIVE_TICKERIOT";
export const LIVE_TICKERDSH = "LIVE_TICKERDSH";
export const LIVE_TICKERNEO = "LIVE_TICKERNEO";
export const LIVE_TICKERZEC = "LIVE_TICKERZEC";
export const LIVE_TICKEREOS = "LIVE_TICKEREOS";
export const LIVE_TICKEROMG = "LIVE_TICKEROMG";
export const LIVE_TICKERXVG = "LIVE_TICKERXVG";
export const LIVE_TICKERGNT = "LIVE_TICKERGNT";
export const LIVE_TICKERQTM = "LIVE_TICKERQTM";
const socket = socketIOClient('http://localhost:3001');
let tickerChannel = {};

socket.on("channelID",function(data){
  tickerChannel = Object.assign({},data);
})
export const _getTicker =()=> dispatch =>{
  socket.on("ticker",function(data){
       if(tickerChannel.eth.chanId === data[0]){
        dispatch({type:LIVE_TICKERETH,payload:data})
       }
       if(tickerChannel.bch.chanId === data[0]){
         dispatch({type:LIVE_TICKERBCH,payload:data})
       }
       if(tickerChannel.xrp.chanId === data[0]){
         dispatch({type:LIVE_TICKERXRP,payload:data})
       }
       if(tickerChannel.ltc.chanId === data[0]){
         dispatch({type:LIVE_TICKERLTC,payload:data})
       }
       if(tickerChannel.xmr.chanId === data[0]){
         dispatch({type:LIVE_TICKERXMR,payload:data})
       }
       if(tickerChannel.etc.chanId === data[0]){
         dispatch({type:LIVE_TICKERETC,payload:data})
       }
       if(tickerChannel.iot.chanId === data[0]){
         dispatch({type:LIVE_TICKERIOT,payload:data})
       }
       if(tickerChannel.dsh.chanId === data[0]){
         dispatch({type:LIVE_TICKERDSH,payload:data})
       }
       if(tickerChannel.neo.chanId === data[0]){
         dispatch({type:LIVE_TICKERNEO,payload:data})
       }
       if(tickerChannel.zec.chanId === data[0]){
         dispatch({type:LIVE_TICKERZEC,payload:data})
       }
       if(tickerChannel.eos.chanId === data[0]){
         dispatch({type:LIVE_TICKEREOS,payload:data})
       }
       if(tickerChannel.omg.chanId === data[0]){
         dispatch({type:LIVE_TICKEROMG,payload:data})
       }
       if(tickerChannel.xvg.chanId === data[0]){
         dispatch({type:LIVE_TICKERXVG,payload:data})
       }
       if(tickerChannel.gnt.chanId === data[0]){
         dispatch({type:LIVE_TICKERGNT,payload:data})
       }
       if(tickerChannel.qtm.chanId === data[0]){
         dispatch({type:LIVE_TICKERQTM,payload:data})
       }
  })

}
