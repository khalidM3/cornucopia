'use strict';

module.exports = {
  template: require('./create-comment.html'),
  controller: ['$log', 'commentService', CreateCommentController],
  controllerAs: 'createCommentCtrl',
  bindings: {
    recipe: '<'
  }
};

function CreateCommentController($log, commentService){
  $log.debug('createCommentController');

  // this.comment = {};

  this.createComment = function(){
    let commentData = {
      comment: this.comment
    };
    commentService.createComment(this.recipe, commentData)
    .then( () => {
      this.comment = null;
    });
  };
}