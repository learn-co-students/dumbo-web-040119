class AddLastNameToSpiceGirl < ActiveRecord::Migration[5.2]
  def change
    add_column :spice_girls, :last_name, :string
  end
end
