// List of commonly targeted ports for monitoring //
const PORTS = [
   { port: 20, service: 'FTP Data', description: 'File Transfer Protocol Data Channel' },
   { port: 21, service: 'FTP Control', description: 'File Transfer Protocol Control' },
   { port: 22, service: 'SSH', description: 'Secure Shell Remote Access' },
   { port: 23, service: 'Telnet', description: 'Unencrypted Remote Login' },
   { port: 25, service: 'SMTP', description: 'Simple Mail Transfer Protocol' },
   { port: 53, service: 'DNS', description: 'Domain Name System' },
   { port: 67, service: 'DHCP', description: 'Dynamic Host Configuration' },
   { port: 68, service: 'DHCP', description: 'Dynamic Host Configuration' },
   { port: 80, service: 'HTTP', description: 'Web Traffic' },
   { port: 88, service: 'Kerberos', description: 'Authentication Service' },
   { port: 110, service: 'POP3', description: 'Post Office Protocol' },
   { port: 111, service: 'RPC', description: 'Remote Procedure Call' },
   { port: 123, service: 'NTP', description: 'Network Time Protocol' },
   { port: 135, service: 'RPC Endpoint', description: 'Windows RPC Service' },
   { port: 137, service: 'NetBIOS Name', description: 'Network Name Service' },
   { port: 138, service: 'NetBIOS Datagram', description: 'Network Datagram Distribution' },
   { port: 139, service: 'NetBIOS Session', description: 'Network Session Service' },
   { port: 143, service: 'IMAP', description: 'Internet Message Access Protocol' },
   { port: 161, service: 'SNMP', description: 'Simple Network Management Protocol' },
   { port: 162, service: 'SNMP Trap', description: 'SNMP Notification' },
   { port: 224, service: 'Multicast', description: 'Multicast Base Address' },
   { port: 239, service: 'Multicast', description: 'Multicast Routing' },
   { port: 401, service: 'UNIXWare', description: 'UNIX to UNIX Connection' },
   { port: 402, service: 'UNIXWare', description: 'UNIX to UNIX Connection' },
   { port: 389, service: 'Open Directory', description: 'LDAP Directory Service' },
   { port: 443, service: 'HTTPS', description: 'Secure Web Traffic' },
   { port: 445, service: 'SMB', description: 'Server Message Block/CIFS' },
   { port: 464, service: 'Kerberos Password', description: 'Kerberos Password Change' },
   { port: 500, service: 'ISAKMP', description: 'Internet Security Association and Key Management Protocol' },
   { port: 512, service: 'rexec', description: 'Remote Execution Service' },
   { port: 513, service: 'rlogin', description: 'Remote Login' },
   { port: 514, service: 'rsh', description: 'Remote Shell' },
   { port: 515, service: 'Line Printer', description: 'UNIX Printer Daemon' },
   { port: 520, service: 'RIP', description: 'Routing Information Protocol' },
   { port: 523, service: 'IBM-DB2', description: 'Database Communication' },
   { port: 544, service: 'Kerberos Rsh', description: 'Kerberized Remote Shell' },
   { port: 548, service: 'AFP', description: 'Apple File Protocol' },
   { port: 631, service: 'CUPS', description: 'Common Unix Printing System' },
   { port: 636, service: 'LDAPS', description: 'LDAP over SSL' },
   { port: 749, service: 'Kerberos Admin', description: 'Kerberos Administration' },
   { port: 993, service: 'IMAPS', description: 'IMAP over SSL' },
   { port: 995, service: 'POP3S', description: 'POP3 over SSL' },
   { port: 1025, service: 'Windows RPC', description: 'Microsoft Remote Procedure Call' },
   { port: 1080, service: 'SOCKS Proxy', description: 'Socket Secure Proxy' },
   { port: 1433, service: 'MSSQL', description: 'Microsoft SQL Server' },
   { port: 1521, service: 'Oracle', description: 'Oracle Database' },
   { port: 2049, service: 'NFS', description: 'Network File System' },
   { port: 2222, service: 'SSH Alt', description: 'Alternative SSH Port' },
   { port: 2427, service: 'Net Mount', description: 'Network Mounting Protocol' },
   { port: 2428, service: 'Net Mount', description: 'Alternative Network Mounting' },
   { port: 3306, service: 'MySQL', description: 'MySQL Database' },
   { port: 3389, service: 'RDP', description: 'Remote Desktop Protocol' },
   { port: 3478, service: 'FaceTime', description: 'Apple Video Calling' },
   { port: 4000, service: 'Continuity', description: 'Apple Device Handoff' },
   { port: 4242, service: 'Captive Portal', description: 'Apple Network Capture Detection' },
   { port: 4243, service: 'Captive Portal', description: 'Alternative Network Capture Service' },
   { port: 4444, service: 'Malware C2', description: 'Potential Command & Control' },
   { port: 4897, service: 'FaceTime', description: 'FaceTime Relay' },
   { port: 5000, service: 'Bonjour Sleep Proxy', description: 'Apple Device Sleep Proxy' },
   { port: 5353, service: 'mDNS', description: 'Multicast DNS Service Discovery' },
   { port: 5100, service: 'Handoff', description: 'Apple Device Handoff' },
   { port: 5222, service: 'Jabber', description: 'XMPP Messaging' },
   { port: 5223, service: 'MDM', description: 'Mobile Device Management' },
   { port: 5224, service: 'MDM', description: 'Alternative Mobile Device Management' },
   { port: 5225, service: 'MDM', description: 'Mobile Device Management Service' },
   { port: 5226, service: 'MDM', description: 'Mobile Device Management Notification' },
   { port: 5269, service: 'Jabber Server', description: 'XMPP Server-to-Server' },
   { port: 5280, service: 'XMPP Bosh', description: 'XMPP Web Connection' },
   { port: 5353, service: 'mDNS', description: 'Multicast Domain Name System' },
   { port: 5432, service: 'PostgreSQL', description: 'PostgreSQL Database' },
   { port: 5900, service: 'VNC', description: 'Virtual Network Computing' },
   { port: 5985, service: 'WinRM', description: 'Windows Remote Management' },
   { port: 5986, service: 'WinRM SSL', description: 'Secure Windows Remote Management' },
   { port: 6000, service: 'X11', description: 'X Window System' },
   { port: 6620, service: 'NetAgent', description: 'Network Management' },
   { port: 6667, service: 'IRC', description: 'Potential Botnet Communication' },
   { port: 6771, service: 'Safari Scoped Bookmark', description: 'Web Browser Resource Access' },
   { port: 6772, service: 'Safari Scoped Bookmark Alt', description: 'Alternative Web Resource Access' },
   { port: 6881, service: 'P2P', description: 'Peer-to-Peer Networking' },
   { port: 6881, service: 'Torrent', description: 'BitTorrent Networking' },
   { port: 6882, service: 'P2P Alt', description: 'Alternative Peer-to-Peer Port' },
   { port: 6969, service: 'Tracker', description: 'BitTorrent Tracker' },
   { port: 7000, service: 'Airplay', description: 'Screen Casting' },
   { port: 7070, service: 'Real Time Streaming', description: 'Media Streaming' },
   { port: 7100, service: 'Screen Share', description: 'macOS Screen Sharing' },
   { port: 8000, service: 'P2P', description: 'Peer-to-Peer Streaming' },
   { port: 8265, service: 'AWS', description: 'Amazon Web Services Communication' },
   { port: 9100, service: 'JetDirect', description: 'Printer Network Port' },
   { port: 9418, service: 'Git', description: 'Git Protocol' },
   { port: 11211, service: 'Memcached', description: 'Distributed Memory Caching' },
   { port: 17500, service: 'Dropbox LAN Sync', description: 'Local Network File Synchronization' },
   { port: 27017, service: 'MongoDB', description: 'NoSQL Database' },
   { port: 50000, service: 'VND', description: 'Video Network Discovery' }
];

export default SEC_PORTS;
