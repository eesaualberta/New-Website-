;/*FB_PKG_DELIM*/

__d("LSUpdateIGE2EEEligibilityValue",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(176).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({e2eeEligibility:a[1]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);