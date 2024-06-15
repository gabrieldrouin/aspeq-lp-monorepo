# https://ui.shadcn.com/docs/installation/next
npx create-next-app@latest aspeq-lp --typescript --tailwind --eslint --app --src-dir --use-npm --import-alias "@/*"
cd aspeq-lp
yes | npx shadcn-ui@latest init

# https://prettier.io/docs/en/install.html
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
npx prettier . --write