# ecommerce

====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage should display a list of products for people to browse.


Features
----

- products are displayed in a grid. *
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
- each product has :*
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.*
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.*
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.*
- the product grid should automatically load more items as you scroll down.*
- display an animated "loading..." message while the user waits for the data to load.*
- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time.  But they still should not be displayed until the user has scrolled to the bottom of the product grid.
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".

### Ads features

- after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in `public/index/html`, but make sure the `?r` query param is randomly generated each time an ad is displayed.
- Ads should be randomly selected, but a user must never see the same ad twice in a row.


FAQ
----

### How do I start the app?

1-you need a server to get data from it,so open terminal and cd to server file.
write npm start to run your sever.
2-cd to eccomerce with cd ..  then write yarn or npm install to install all packages.
3-write react-native run-ios .(if you are in mac os you need xcode be installed) or react-native run-android (android SDK or android studio shold be installed).

