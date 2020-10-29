module.exports = function({ bot, utils, commands }) {
    console.log("Deprecation Warning. Please use https://github.com/MMPlugins/CloseAddons");
    console.log("Thanks -Eight8");
    commands.addInboxThreadCommand('messageclose', '[text$]',  async (msg, args, thread) => {
      if (! args.text && msg.attachments.length  === 0) {
        utils.postError(msg.channel, 'Text or Attachment is required');
        return;
      }
  
      const threadchannel = await thread.getDMChannel();
      bot.createMessage(threadchannel.id, `${args.text}`, msg.attachments, false);
      msg.delete();
      thread.close();
    });
    commands.addInboxThreadCommand('reasonclose', '[text$]',  async (msg, args, thread) => {
      if (! args.text && msg.attachments.length  === 0) {
        utils.postError(msg.channel, 'Text or Attachment is required');
        return;
      }
  
      const threadchanneltwo = await thread.getDMChannel();
      bot.createMessage(threadchanneltwo.id, `Reason for thread closure: ${args.text}`, msg.attachments, false);
      msg.delete();
      thread.close();
    });
  };
