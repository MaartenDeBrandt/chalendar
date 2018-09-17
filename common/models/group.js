'use strict';

module.exports = function(Group) {
  Group.beforeRemote('create', function(context, user, next) {
    context.args.data.creationDate = Date.now();
    context.args.data.creatorId = context.req.accessToken.userId;
    next();
  });
};
