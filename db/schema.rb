# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150610141554) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blurbs", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "body"
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "blurbs", ["user_id"], name: "index_blurbs_on_user_id", using: :btree

  create_table "companies", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "website"
    t.string   "jobs_site"
    t.string   "contact"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "companies", ["name"], name: "index_companies_on_name", using: :btree

  create_table "cover_letters", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "blurb_id"
    t.integer  "profile_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "title"
    t.text     "body"
  end

  add_index "cover_letters", ["blurb_id"], name: "index_cover_letters_on_blurb_id", using: :btree
  add_index "cover_letters", ["company_id"], name: "index_cover_letters_on_company_id", using: :btree
  add_index "cover_letters", ["profile_id"], name: "index_cover_letters_on_profile_id", using: :btree
  add_index "cover_letters", ["user_id"], name: "index_cover_letters_on_user_id", using: :btree

  create_table "oauths", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "uid"
    t.string   "provider"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "oauths", ["uid"], name: "index_oauths_on_uid", using: :btree
  add_index "oauths", ["user_id"], name: "index_oauths_on_user_id", using: :btree

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "cover_letter_template"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "linkedin"
    t.string   "github"
    t.string   "personal_site"
  end

  add_index "profiles", ["user_id"], name: "index_profiles_on_user_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.string   "token",      null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sessions", ["token"], name: "index_sessions_on_token", using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "blurbs", "users"
  add_foreign_key "cover_letters", "blurbs"
  add_foreign_key "cover_letters", "companies"
  add_foreign_key "cover_letters", "profiles"
  add_foreign_key "cover_letters", "users"
  add_foreign_key "oauths", "users"
  add_foreign_key "profiles", "users"
  add_foreign_key "sessions", "users"
end
