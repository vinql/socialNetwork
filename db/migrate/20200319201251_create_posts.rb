class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :content
      t.integer :reactionType1, default: 0
      t.integer :reactionType2, default: 0
      t.integer :reactionType3, default: 0
      t.integer :reactionType4, default: 0
      t.integer :dislikes , default: 0

      t.timestamps
    end
  end
end