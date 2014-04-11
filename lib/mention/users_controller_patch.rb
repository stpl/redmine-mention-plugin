module Mention
  module UsersControllerPatch
    def self.included(base)
      base.class_eval do
        #  think this is wrong. It is very easy for someone else to overwrite it and then it would be impossible to debug. Let's make our own controller and call that.
        def search
          result = []
          result = User.with_username(params[:keyword]).collect{|user| {id: user.id, username: user.login}} if params[:keyword]
          render json: {result: result}
        end
      end
    end
  end
end