#------------------------------
# By Fahad Alduraibi
# Last update: June 12, 2012
# Version: 1.0
#------------------------------
 
import mechanize
import sys
 
br = mechanize.Browser()
br.set_handle_equiv(True)
#br.set_handle_gzip(True)
br.set_handle_redirect(True)
br.set_handle_referer(True)
br.set_handle_robots(False)
br.set_handle_refresh(mechanize._http.HTTPRefreshProcessor(), max_time=1)
br.addheaders = [('User-agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:13.0) Gecko/20100101 Firefox/13.0')]
 
testURL = 'http://www.opendns.com'
response = br.open(testURL)
title = br.title()
print title
if title.find("DNS") != -1:
	print 'FAD: You are already logged in to Nordstrom'
	sys.exit()
try:
	forms = mechanize.ParseResponse(response, backwards_compat=False)
except:
	print "FAD: Error in parsing forms, Am I already logged in?"
	sys.exit()
response.close
 
form = forms[0]
#print form
#print "----------------------------------- Login"
form['username'] = 'huseyin.okten@amasya.edu.tr'
form['password'] = 'sifre_degistir'
request = form.click()

response = mechanize.urlopen(request)
forms = mechanize.ParseResponse(response, backwards_compat=False)
response.close()
print "--- Nordstrom Done ---"
