class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user
  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= Session.find_by(token: session[:session_token]).user

  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    @session = user.sessions.create()
    session[:session_token] = @session.token

  end


end
