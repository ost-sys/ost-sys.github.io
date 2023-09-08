var userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},
    {device: 'Windows XP and older', platform: /Windows NT 5.1/},
    {device: 'Windows Vista', platform: /Windows NT 6.0/},
    {device: 'Windows 7', platform: /Windows NT 6.1/},
    {device: 'Windows 8', platform: /Windows NT 6.2/},
    {device: 'Windows 8.1', platform: /Windows NT 6.3/},
    {device: 'Windows 10/11', platform: /Windows NT 10.0/},
    {device: 'Macintosh', platform: /Macintosh/}
];

var platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Неизвестная платформа!' + platform;
}
document.write('<span class="fixed-ver">' + getPlatform() + '</span>');
