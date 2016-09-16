Fix Checkbox
====================
Unchecked checkboxes are cames as undefined in server-side. This tiny addon can fix it.

## Usage
Simply include fix-checkbox.js on your site then use the following codes:

```php
<!DOCTYPE html>
<html>
<head>
<title>Checkbox Test</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="fix-checkbox.js"></script>
</head>
<body>

    <form action="index.php" method="post">
    <input type="checkbox" name="test1" value="1">
    <input type="checkbox" name="test2" value="1">
    <input type="submit" name="send" value="Git">
    </form>

</body>
</html>

<?php

if (isset($_POST)) {
    print_r($_POST);
}

?>
```
## We can get these results when we check first and leave second:

**without**
```php
Array (
  [test1] => 1
  [send] => Git
)
```
**with**
```php
Array (
  [test1] => 1
  [test2] => 0
  [send] => Git
)
```
