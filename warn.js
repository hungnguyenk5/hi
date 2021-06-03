const fs = require("fs");
module.exports.config = {
    name: "warn",
    version: "2.0.6",
    hasPermssion: 0,
    credits: "MewMew",
    description: "Cảnh cáo",
    commandCategory: "General",
    usages: "warn [args]",
    cooldowns: 5,
    };

module.exports.run = async function({ api, event, args, Threads }) {
			let uid = event.messageReply.senderID;
			let reason = contentMessage.slice(prefix.length, contetnMsg.length);
			if(reason == ""){
				reason = event.messageReply.body;
			}
			return fs.readFile(__dirname + "/src/warn.json", "utf-8", (err, data) => {
					if (err) throw err;
					var oldData = JSON.parse(data);
					if (!oldData.some(item => item.tid == threadID)) {
						let addThis = {
							tid: threadID,
							warn: [],
							pl: senderID
						}
						addThis.warn.push({ id: uid, reason: reason,num: 2 });
						oldData.push(addThis);
						return fs.writeFile(__dirname + "/src/warn.json", JSON.stringify(oldData,null, 4), {mode: 0o666}, (err) => (err) ? console.error(err) : api.sendMessage(getText(`${uid} còn 2 lần cảnh cáo`, threadID, messageID));
					}
					else {
						let getWarn = oldData.find(item => item.tid == threadID);
						if (getWarn.warn.some(item => item.id == uid)) {
							let index = getWarn.warn.indexOf(getWarn.warn.find(item => item.id == uid));
							let lydo = getWarn.warn.find(item => item.id == uid).reason;
							let num = getWarn.warn.find(item => item.id == uid).num;
							if (getWarn.warn.some(item => item.pl != senderID)) {
								let oldpl = getWarn.pl;
								getWarn.pl = oldpl + ","+senderID
							}
								let oldpl = getWarn.pl;

							if(num == 2){
								if (lydo != reason) {
									getWarn.warn[index].reason = lydo + " , " + reason;
									getWarn.warn[index].num = 1;

								}else{
									getWarn.warn[index].num = 1;
								}
								api.sendMessage(${uid} còn 1 lần cảnh cáo, threadID, messageID);
								return fs.writeFile(__dirname + "/src/warn.json", JSON.stringify(oldData,null, 4), {mode: 0o666});

							}else{
								if (lydo != reason) {
									getWarn.warn[index].reason = lydo + " , " + reason;
								}
								var getThread = oldData.find(item => item.id == threadID).warn;
								getThread.splice(getThread.findIndex(item => item.id === uid), 1);

								let body = Chúc mừng bạn đã bị ban khói nhóm \nlý do: ${lydo}\nIDban: ${oldpl};
								//thêm phần ban khỏi nhóm và bot
								return fs.writeFile(__dirname + "/src/warn.json", JSON.stringify(oldData,null, 4), {mode: 0o666}, (err) => (err) ? console.error(err) : api.sendMessage(bodyy, threadID, messageID));


							}
						}
						getWarn.warn.push({ id: uid, reason: reason,num: 2 });
						return fs.writeFile(__dirname + "/src/shortcut.json", JSON.stringify(oldData,null, 4),{mode: 0o666}, (err) => (err) ? console.error(err) : api.sendMessage(${uid} còn 2 lần cảnh cáo, threadID, messageID));
					}
				});
}
