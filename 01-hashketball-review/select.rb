shorter_array_of_cat_names = cat_names.select do |cat_name|
  # if cat_name.length > 6
  #   true
  # else
  #   false
  # end
  # p cat_name.length > 6
  cat_name.length > 6 #? true : false
end