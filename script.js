const searchClient = algoliasearch('O22RB5L6OV', 'df701a886b2fc9905f6f34d4d3f321d2');

const search = instantsearch({
indexName: 'Email-Index',
searchClient,
});

search.addWidgets([
instantsearch.widgets.searchBox({
container: '#searchbox',
}),

instantsearch.widgets.configure({
hitsPerPage: 16
}),

instantsearch.widgets.hits({
container: '#hits',
templates: {
item: `
<div>
<div class="hit-name">
{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
</div>
</div>
`,
},
}),

instantsearch.widgets.pagination({
container: '#pagination',
}),
]);

search.start();
