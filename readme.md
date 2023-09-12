# Custom [Outerbase](https://docs.outerbase.com/) Plugin

This repository is to serve as an example for [my hashnode blog]() and on top of that adding extra features to it for making it useful for others as well.

It has two branches for that 
- [hashnode](https://github.com/anujmistry1729/custom_plugin/tree/hashnode_example)
- [extending_hashnode_example](https://github.com/anujmistry1729/custom_plugin/tree/hashnode_example_extended)

## Hashnode Example 

The example covers creating a column plugin that renders the URL stored in database column. As the article is for a walkthrough in plugin ecosystem it covers basic building blocks of creating a plugin, deploying and testing it.

Plugin will look a little bit weird as it does not have better UI as its for learning purpose.

Final Plugin will look like:
![image](https://github.com/anujmistry1729/custom_plugin/assets/60545642/3923044c-03bd-40db-a19a-455b1576e649)


## Extending Hashnode Example

I have added a few feature on top of basic plugin to make it look more attractive and easy to use.

It will look something like this:
![image](https://github.com/anujmistry1729/custom_plugin/assets/60545642/8edce2fe-e108-4576-8d4f-458df69842a4)

 

- Features
    - Better UI
    - Loader 
    - Preview the Updated URL in modal

- Bug
    - Modal bleeds on top and bottom column view

- In progress    
    - Updating the value of the column itself
