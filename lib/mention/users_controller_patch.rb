module Mention
  module UsersControllerPatch
    def self.included(base)
      base.class_eval do
        def search
          result = []
          if params[:keyword]
            result = User.with_username(params[:keyword])
          end
        end
      end
    end
  end
end