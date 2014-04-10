module Mention
  module UsersControllerPatch
    def self.included(base)
      base.class_eval do
        def search
          result = []
          result = User.with_username(params[:keyword]).collect{|user| {id: user.id, username: user.login}} if params[:keyword]
          render json: {result: result}
        end
      end
    end
  end
end