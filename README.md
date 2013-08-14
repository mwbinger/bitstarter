bitstarter
==========
This is my repo for the Startup Engineering coursera MOOC

General dev/staging/production work flow with git, github, and heroku:

git checkout develop	       # move to develop branch
emacs index.html	       # make edits
git add index.html	       # add changes
git commit -m "new edits"      # commit changes
git push origin develop	       # push to origin (which in this case is just github)
node web.js		       # runs the script, which can be viewed on the development server thru the 8080 port:
     			       # http://ec2-54-214-66-37.us-west-2.compute.amazonaws.com:8080
			       # make additional changes as appropriate
git checkout staging	       # move to stagin branch
git merge develop	       # merge changes
git push staging-heroku staging:master		# push to the heroku servers our staging app to see it in it's true environment
    	 					# view at http://mwbinger-bitstarter-s-mooc.herokuapp.com/
						# repeat above dev-staging process to add content and fix bugs
git checkout master				# move to production branch where finalized versions are kept
git merge staging				# merge all the previous changes from the dev and staging process
git push production-heroku master:master	# push the final production app to the heroku servers and view at:
    	 		   			# http://mwbinger-bitstarter-mooc.herokuapp.com/ 
