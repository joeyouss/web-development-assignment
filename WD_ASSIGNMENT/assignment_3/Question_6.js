
<!DOCTYPE html>
<html>

<head>
    <title>Jyoti Bisht</title>
</head>

<body>
    <style></style>
    <input id="fname" type="text" name="fname" placeholder="FirstName" />
    <input id="lname" type="text" name="lname" placeholder="LastName" />
    <button onclick="display()">Show</button>
    <p id="displaymsg"></p>
    <script type="text/javascript">
        function display {
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var message = `Welcome ${fname} ${lname} to the world of web development`;

            document.getElementById("displaymsg").textContent = message;
        }
    </script>
</body>

</html>
