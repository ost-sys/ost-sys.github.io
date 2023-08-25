var userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},
    {device: 'Windows XP (или Server 2003) and older', platform: /Windows NT 5.1/},
    {device: 'Windows Vista (or Server 2008)', platform: /Windows NT 6.0/},
    {device: 'Windows 7 (или Server 2008 R2)', platform: /Windows NT 6.1/},
    {device: 'Windows 8 (или Server 2012)', platform: /Windows NT 6.2/},
    {device: 'Windows 8.1 (или Server 2012 R2)', platform: /Windows NT 6.3/},
    {device: 'Windows 10/11 (или Server 2016/2019)', platform: /Windows NT 10.0/},
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
document.write('<span class="fixed-ver">Текущая ОС: ' + getPlatform() + '</span>');
