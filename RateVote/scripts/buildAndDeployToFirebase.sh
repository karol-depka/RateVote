
set -x

# TODO: add protractor.sh &&, once tests are reliable

# To initialize, run: firebase use --add

#   && cp -r assets dist \

ng build \
  && firebase deploy

