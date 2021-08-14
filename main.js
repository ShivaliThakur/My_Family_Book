var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Baba.jpeg", "WhatsApp Image 2021-08-14 at 10.50.41 AM.jpeg" , "IMG_20210812_182956.jpg", "IMG_20210630_125339.jpg", "IMG_20210717_224841.jpg", "WhatsApp Image 2021-08-14 at 10.54.20 AM.jpeg"];
var names = ["Family Book","H.N Thakur", "Satyendra Thakur", "Sanvi Thakur", "Shivali Thakur", "Shiti Thakur" , "Vibha Thakur"];
var member = ["", "Baba", "Papa", "My Younger Sister", "Me", "Mumma", "Dadi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
    var updatedMember = member[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("member_name").innerHTML = updatedMember;

}
