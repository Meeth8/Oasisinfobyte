angular.module("app", ["ngMaterial"]);

angular.module("app").controller("mainCtrl", mainCtrl);

angular.module("app").config(config);

function mainCtrl($mdSidenav) {
  var vm = this;

  vm.openLeftMenu = openLeftMenu;
  vm.menuOpened = false;
  vm.historyTiles = [
    {
      year: 1955,
      title: "A legend is born.",
      image:
        "https://www.shutterstock.com/image-vector/continuous-one-line-baby-crawls-600nw-2392458675.jpg",
    },
    {
      year: 1967,
      title: "Attends Lakeside School.",
      image: "https://i.insider.com/5a1c67373dbef4a7748b7fb5?width=700",
    },
    {
      year: 1973,
      title: "Enrolls at Harvard University.",
      image:
        "https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      year: 1975,
      title:
        "Micro-Soft is formed, a partnership between Bill Gates and Paul Allen.",
      image:
        "https://imageio.forbes.com/b-i-forbesimg/clareoconnor/files/2013/04/GatesAllen.jpg?height=452&width=577&fit=bounds",
    },
    {
      year: 1978,
      title: "Opens first international office in Japan.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Odakyu_Southern_Tower_cropped.jpg/640px-Odakyu_Southern_Tower_cropped.jpg",
    },
    {
      year: 1979,
      title: "Relocates headquarters to Bellevue, Washington.",
      image:
        "https://uu-consulting.com/wp-content/uploads/2022/01/20210501_161209-370x265.jpg",
    },
    {
      year: 1980,
      title: "Microsoft partners with IBM to write BASIC for the IBM PC.",
      image:
        "https://assets.bizclikmedia.net/1800/a868d5b02b304e310a1e15e1286e185f:f9c48c7589a82355871aee3082eeb354/microsoft-ibm.png",
    },
    {
      year: 1981,
      title: "Microsoft becomes incorporated and Bill Gates becomes President.",
      image:
        "https://cdn.britannica.com/71/103171-050-D6D9D227/Bill-Gates-Microsoft-Corporation-operating-system-press-2001.jpg",
    },
    {
      year: 1983,
      title:
        "Microsoft announces Windows as an extension of its MS-DOS operating system.",
      image: "https://expert4data.files.wordpress.com/2014/01/pc.jpg",
    },
    {
      year: 1994,
      title: "Bill Gates marries Melida French.",
      image:
        "https://image.cnbcfm.com/api/v1/image/104924148-GettyImages-671289918-bill-melinda-gates.jpg?v=1620229507",
    },
    {
      year: 2000,
      title:
        "Gates steps down as CEO of Microsoft and Steve Ballmer takes over the helm.",
      image:
        "https://3.bp.blogspot.com/-0xhmNGVGY2Q/Uh0R-eVLnsI/AAAAAAAAAbs/IqAeNiM58KM/s640/2.JPG",
    },
    {
      year: 2007,
      title:
        "Graduates from Harvard after leaving his junior year to develop Microsoft in 1973.",
      image:
        "https://image.cnbcfm.com/api/v1/image/103933591-GettyImages-454261842.jpg?v=1529472665",
    },
  ];

  // Sidenav
  function openLeftMenu() {
    $mdSidenav("left").toggle();
  }
}
mainCtrl.$inject = ["$mdSidenav"];

function config($mdThemingProvider) {
  $mdThemingProvider.theme("default").primaryPalette("grey", {
    default: "100",
    "hue-1": "100",
    "hue-2": "600",
    "hue-3": "A100",
  });
}

config.$inject = ["$mdThemingProvider"];
