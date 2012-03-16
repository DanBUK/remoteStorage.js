(function(){
  require(['../src/lib/platform.js'], function(platform) {
    describe("browser specific functions", function() {
      it("should parse a the XML and return the link", function() {
        var xml = '<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n' ;
        xml += '<XRD xmlns=\'http://docs.oasis-open.org/ns/xri/xrd-1.0\'\n' ;
        xml += '     xmlns:hm=\'http://host-meta.net/xrd/1.0\'>\n' ;
        xml += '          <Link rel=\'lrdd\'';
        xml += ' template=\'http://unhosted.org/.well-known/{uri}.webfinger\'></Link></XRD>';
        platform.parseXml(xml, function(err, content) {
          expect(err).toEqual(null);
          expect(typeof content.Link).toEqual("object");
      });
      });
    });
  });
})();
