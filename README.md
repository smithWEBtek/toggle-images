# toggle-images
Demo of jquery toggling images
Once upon a time there were 2 images living in a div.
They were styled in such a way that they both had the full width of the div.
So the user had to scroll horizontally to see the other image, not showing.

jquery finds the first image in the div
jquery calls `.toggle()` on that image, which sets a CSS rule of `display: none`
Then the other image takes it's place.
