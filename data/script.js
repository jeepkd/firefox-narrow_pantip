function click_all_elements_of(class_name) {
  var elements = document.getElementsByClassName(class_name);
  for (var element_index=0; element_index<elements.length; element_index++) {
    elements[element_index].click();
  }
}

var button_classes = ["bar-paging-ed", "see-more", "load-reply-next"]

for (var class_index = 0; class_index < button_classes.length; class_index++){
  click_all_elements_of(button_classes[class_index]);
}
