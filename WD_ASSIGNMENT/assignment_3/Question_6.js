<--METHOD 1 - USING ONCLICK IN JS AND FUNCTIONS--->
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


<!-- OR THE SECOND METHOD USING PROMPT AND ALERT -->

<!DOCTYPE html>
<html>

<head>
    <title>DISPLAY</title>
</head>

<body>
    <p id="print"></p>

    <script>
        fname = prompt("FIRST NAME INPUT");
        lname = prompt("SECOND NAME INPUT");
        document.getElementById("print").innerHTML =
            "Welcome " + fname + " " + lname + " to the World of  Web";
    </script>
</body>

</html>
