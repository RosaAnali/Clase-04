<!DOCTYPE html>
<html lang="es">
<head>
  <meta ="utf-8">
 <title>jQuery</title>
 <script src="jquery.js"></script>
  <script>
  $(document).ready(function(){
 $("div.menu_punto").hide();
 $("p.menu_capitulo").click(function(){
 $(this).next("div.menu_punto").slideDown(300)
 siblings("div.menu_punto").slideUp("slow");
 });
 });
</script>

</html>