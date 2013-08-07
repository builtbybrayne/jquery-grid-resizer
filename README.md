jQuery Grid Resizer
========================

Jquery Grid Resizer resizes grid columns for even spacing

## Usage

	new GridResizer(containers,childSelector,margin)

* `containers` is the jQuery object referencing the container element(s) - i.e. the row
* `childSelector` is a string selector that finds the column elements within the container element. It is applied using `container.find(childSelector)` so don't include the container in the selector
* `margin` is the gutter you want between each column

### Example

Let's say we have a two containers, one with two columns and another with 5, and we want a gutter of 20px

#### HTML
	<div class="gr-container">
		<div class="gr-block">1...</div>
		<div class="gr-block">2...</div>
	</div>
	<div class="gr-container">
		<div class="gr-block">1...</div>
		<div class="gr-block">2...</div>
		<div class="gr-block">3...</div>
		<div class="gr-block">4...</div>
		<div class="gr-block">5...</div>
	</div>

#### JS
	new GridResizer($(".gr-container"),".gr-block",20)


# Development

This is a very simple script, and I'm mainly putting it up because I've needed to solve this problem a time or two previously and I want to keep a reference to it.

I will consider simple modifications and definitely pull requests, and encourage you to fork and modify this code to meet your needs.