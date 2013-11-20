(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib._01_04 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		playSound("_01_03_aa");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(334));

	// Layer 25
	this.instance = new lib.Tween18("synched",0);
	this.instance.setTransform(741.8,465.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({startPosition:0,_off:false},0).to({alpha:1},5).wait(147));

	// Layer 24
	this.instance_1 = new lib.Tween19("synched",0);
	this.instance_1.setTransform(738.7,417.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(254).to({startPosition:0,_off:false},0).to({alpha:1},5).wait(152));

	// Layer 3
	this.instance_2 = new lib.Symbol5copy();
	this.instance_2.setTransform(811,344.5,1,1,0,0,0,42,60);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(247).to({_off:false},0).to({y:364.5,alpha:1},7).wait(157));

	// Layer 23
	this.instance_3 = new lib.Tween16("synched",0);
	this.instance_3.setTransform(523.6,464.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229).to({startPosition:0,_off:false},0).to({alpha:1},5).wait(177));

	// Layer 22
	this.instance_4 = new lib.Tween17("synched",0);
	this.instance_4.setTransform(523.9,419.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(182));

	// Layer 2
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(594,344.5,1,1,0,0,0,42,60);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(213).to({_off:false},0).to({y:364.5,alpha:1},7).wait(191));

	// Layer 18
	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.setTransform(709.3,571.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(339).to({startPosition:0,_off:false},0).to({alpha:1},8).wait(64));

	// Layer 9
	this.instance_7 = new lib.Tween15("synched",0);
	this.instance_7.setTransform(709.9,535.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(276).to({startPosition:0,_off:false},0).to({alpha:1},8).wait(127));

	// Layer 16
	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(394.5,557.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(238));

	// Layer 15
	this.instance_9 = new lib.Tween10("synched",0);
	this.instance_9.setTransform(149.1,556.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(281));

	// Layer 7
	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.setTransform(91.7,557.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({startPosition:0,_off:false},0).to({alpha:1},9).wait(311));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("AAdFwQgzgLgfghQghAKg2gVQgggMgDgoQgVk7BbkdQAHgWAZgBQAYATASAZIAIgfQAFgUAWAAQAnACAUAgQAKAPACARQB3BKgQCsQgUDLhAC8QgMAkgjAAQgJAAgJgCg");
	var mask_graphics_60 = new cjs.Graphics().p("AisFeQgSgJgIgZQhZkgBkkAQAEgKAJgOQAZgnAsgCQAVAQAQAUQALgrANgqQAHgVAZgCQAXATARAZIAIgeQAFgUAYgBQAnADAUAgQAKAOACARQB3BLgQCrQgUDLhAC9QgPAsgygLQg0gLggghQgSAGgdgGQgOA0gsAAQgeAAgrgXg");
	var mask_graphics_61 = new cjs.Graphics().p("AlLEmQhcikATihQADgUAMgWQAUglAkgHQgDhaCiAtQgFgmAVgeQAVgfAjgCQAeAXAXAdQALgvATgvQAEgKAJgOQAXgnAsgCQAVAQAQAUQAKgrAOgqQAGgVAagCQAYAUASAYIAIgeQAFgUAYgBQAnADAUAgQAKAOACARQB3BLgQCrQgUDLhAC9QgPAsgygLQg1gLgfghQgVAGgdgGQgPA4gygEIABAFQALAtgyAIIgKABQA9BMhpAPQgbAEgZAAQifAAhXicg");
	var mask_graphics_62 = new cjs.Graphics().p("AiKH5QjjiViPjJQgPgVAegNQA/gcBBAaQgzgiALg4QALgzA2gEIAqAdQgHg3AHg5QACgUANgWQATglAkgHQgChaCiAtQgGgmAVgeQAWgfAhgCQAeAWAWAeQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAUQALgrAOgqQAGgVAZgCQAZATARAZIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC7QgOAsgzgLQg0gLggghQgUAGgdgGQgPA4gzgEIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQA0BghzAzQgYAKgYAAQgjAAgjgXg");
	var mask_graphics_63 = new cjs.Graphics().p("AhOJjQjZhJjdgnQgVgDgFgdQgbidBhhUQgdgaAEgmQAFgvAugNIAKgCIglgyQgPgUAegOQA/gZBBAYQgzggALg5QALg1A2gDIAqAeQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAUgfAjgBQAeAWAWAeQAMgwASguQAEgKAJgOQAZgnAsgDQAVARAQAUQALgrAOgqQAGgWAZgBQAZATARAZIAIgfQAGgUAXAAQAnACAVAgQAJAPADARQB2BKgQCsQgTDNhBC6QgOAsgzgKQg0gLggghQgUAGgdgGQgPA4gzgEIACAEQALAugzAHIgKACQA+BMhsAPIgbADQAvBWhaAyQAOAPANAQQAaAggQAnQAsB/hgAAQgkAAg+gVg");
	var mask_graphics_64 = new cjs.Graphics().p("Ai7K9Qi8g4ichcQgcgQAUgiQgOgVgGgcQgMgvAqgaQgbieBihUQgegZAEgnQAFgvAugMIAKgDIglgvQgOgVAegNQA+gcBBAaQgzgiAMg4QALg1A1gEIAqAfQgGg5AGg5QADgUAMgWQAUglAkgHQgChaChAtQgFgmAVgeQATgfAjgCQAfAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAUQALgrANgqQAHgVAZgCQAZAUARAYIAIgeQAFgUAYgBQAnADAUAgQAKAOACARQB3BLgQCrQgUDNhAC9QgPAqgygLQg1gLgfgfQgUAGgdgGQgPA2gzgEIABAFQALAtgyAIIgKABQA+BMhsAPIgbADQAuBWhaAyQAPAPANARQAZAggPAnQAgBegsAYIAyAaQAQAJgMAWQhDB9iGAAQg0AAg+gSg");
	var mask_graphics_65 = new cjs.Graphics().p("AAbMOQhIgShOgDQjlgJiuhxQgOgKgKgWQglhUBPgbIgWgNQgcgQAUgiQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgtAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAUgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA3gzgEIACAFQALArgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAYIAyAaQAQAJgMAWQgdA3grAfQBBATA/AWQAVAIgIAcQgaBmhcAAQgYAAgcgHg");
	var mask_graphics_66 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZQDZhWDVhjQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgyg");
	var mask_graphics_67 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgZgVgSgjQgRgiAmgWQC0hoC2hYQBaA1gpBUIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgyg");
	var mask_graphics_68 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgTgQgPgZQgcgOgegdQgogog5gTQlRhskFjSQgQgNgFgdQgQhXBVgPQA4AGAPA2QAHAXAAAYQBMAaBKAdQgPgyBZgiQAggMAkgCQFGC4FmBBIAZgMQARAKAMALIAzAHQAaAEgKAcQgRAtgdAfIgBABIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgyg");
	var mask_graphics_69 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgTgQgPgZQgcgOgegdQgogog5gTQkFhTjXiRQhsATguh2QgRguADgyQgfgJgUgeQgUgbAKgfQAEgLAHgKQAKgPARgGQgcgWgJghQgJgcAPgZQAHgMAMgJQAVgOAWgBIAoABQhYgmBShUQgrhuB4AHQA+ADA9ARQgLgWAHgYQAXhIBPASQAHgxAwgIQA/gLA4gdQC0AtAYDaQAIBMADBNQACBPhTgLQgeA/guAYQAGASgPAXQgqA+hLATIAFARIANgBQFGC4FmBBIAZgMQARAKAMALIAzAHQAaAEgKAcQgRAtgdAfIgBABIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgyg");
	var mask_graphics_70 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgTgQgPgZQgcgOgegdQgogog5gTQkFhTjXiRQhsATguh2QgRguADgyQgfgJgUgeQgUgbAKgfQAEgLAHgKQAKgPARgGQgcgWgJghQgJgcAPgZQAHgMAMgJQAVgOAWgBIAoABQhYgmBShUQgrhuB4AHQA+ADA9ARQgLgWAHgYQAXhIBPASQAHgxAwgIQA/gLA4gdQA4AOApAfIgDgbQgCgaAhgEQBOgIAgBIQARgcATgkQAUgkAmgCQBUASAFBVIAFA3QD4gYiPC2QhmCBhiCHQh+Crg8jYIgIgBQgeA/guAYQAGASgPAXQgqA+hLATIAFARIANgBQFGC4FmBBIAZgMQARAKAMALIAzAHQAaAEgKAcQgRAtgdAfIgBABIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgyg");
	var mask_graphics_71 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgTgQgPgZQgcgOgegdQgogog5gTQkFhTjXiRQhsATguh2QgRguADgyQgfgJgUgeQgUgbAKgfQAEgLAHgKQAKgPARgGQgcgWgJghQgJgcAPgZQAHgMAMgJQAVgOAWgBIAoABQhYgmBShUQgrhuB4AHQA+ADA9ARQgLgWAHgYQAXhIBPASQAHgxAwgIQA/gLA4gdQA4AOApAfIgDgbQgCgaAhgEQBOgIAgBIQARgcATgkQAUgkAmgCQBUASAFBVIAFA3QDDgTgvBsIAtgZQA9AHAJA8QAEAYgIAYQCjAGg+C2QgYBEAbBEQA4CQhIBiQgUAbgZARQAPALgUANQgcASgcAKQAOAJAKAJIAzAHQAaAEgKAcQgRAtgdAfIgBABIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgygAHGm0QgMgUAUgaQAVgfAjgBIAnAEQgBgeAWgoIATghQgZgegThDIgIgBQgeA/guAYQAGASgPAXQgqA+hLATIAFARIANgBQAuAaAvAYIAAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgTgQgPgZQgLgGgLgIIACAKQAJA3g7AJQilAYicgIQhyA0hqhNQgMgJgPAAQhEBtiLhGQgJgFgLgBQgQBkhcgVQhLgSAdhKQg8htALiPQAHhhAxhNQAXgmAlgcQAZgSAcgCQAnADAVAgQAJAPADARQAggOAeAJQgLgRgJgYQgRguADgyQgfgJgUgeQgUgbAKgfQAEgLAHgKQAKgPARgGQgcgWgJghQgJgcAPgZQAHgMAMgJQAVgOAWgBIAoABQhYgmBShUQgrhuB4AHQA+ADA9ARQgLgWAHgYQAXhIBPASQAHgxAwgIQA/gLA4gdQA4AOApAfIgDgbQgCgaAhgEQBOgIAgBIQARgcATgkQAUgkAmgCQBUASAFBVIAFA3QDDgTgvBsIAtgZQA9AHAJA8QAEAYgIAYQCjAGg+C2QgYBEAbBEQA4CQhIBiQgUAbgZARQAPALgUANQgcASgcAKQAOAJAKAJIAzAHQAaAEgKAcQgRAtgdAfIgBABIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgygAHGm0QgMgUAUgaQAVgfAjgBIAnAEQgBgeAWgoIATghQgZgegThDIgIgBQgeA/guAYQAGASgPAXQgqA+hLATIAFARIANgBQAuAaAvAYIAAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AArSsQgGgPACgQQijAeA3jBQg2Bng3BjQgJAQgUgQQhJg9AphkQibCGiJhpQgWgSAPgfQAFgLAIgKQi7CNhuiIQgVgZAageQAHgoAUghQgcgDgcgGQgcgGAHgkQkGAbCWi6IAFgGIg6AAQgUAAgCgcIgBgQQioAQgNiOQgDgYAOgPQgxgSAhhAQgwAEg3gkQgDgCgBgDQggh4CGgcIgIgFQgOgKgKgWQgmhUBQgbIgWgNQgcgQAUggQgOgVgHgcQgMgvArgaQgbieBhhUQgdgZAEgnQAFgvAugMIAKgDIglgxQgPgVAegNQA/gcBBAaQgzgiALg4QALg1A2gEIAqAfQgHg5AHg5QACgUANgWQATgkAkgIQgChaCiAtQgGgmAVgeQAWgfAjgCQAeAXAWAdQAMgvASgvQAEgKAJgOQAZgnAsgCQAVAQAQAVQALgrAOgrQAGgVAZgCQAZAUARAYIAIgeQAGgUAXgBQAnADAVAgQAJAOADARQB2BLgQCrQgTDNhBC9QgOAsgzgLQg0gLggghQgUAGgdgFQgPA4gzgFIACAFQALAtgzAIIgKABQA+BMhsAPIgbADQAvBWhaAyQAOAPANARQAaAggQAnQAgBegsAWIAyAaQAQAJgMAWQgdA3grAfQBAATBAAWQAVAIgIAcQgKAogVAYQAIAPAFASQBsARgJAwQB4ADAEBNIAjgPQBtAqgOBCIANgHQB/gEBIA7QAXgOAggHQAAgcAMgZQANgbAdgHIATgFQAVACASAMQAMAIAKALQAsgIAiAGQAZgdAtgWQhAgxAohLQArhRBRA/QAaAVAgALQAQhuCFgHIARgBIgBgGQi7hdDZhZIAWgJQgTgQgPgZQgLgGgLgIIACAKQAJA3g7AJQilAYicgIQhyA0hqhNQgMgJgPAAQhEBtiLhGQgJgFgLgBQgQBkhcgVQhLgSAdhKIgIgPIgNAUQgSAZggAAQjJgCAcjjQAHg9gHhBQgKhgBYgTQBvgUA2AuIAIgMQAXgmAlgcQAZgSAcgCQAnADAVAgQAJAPADARQAggOAeAJQgLgRgJgYQgRguADgyQgfgJgUgeQgUgbAKgfQAEgLAHgKQAKgPARgGQgcgWgJghQgJgcAPgZQAHgMAMgJQAVgOAWgBIAoABQhYgmBShUQgrhuB4AHQA+ADA9ARQgLgWAHgYQAXhIBPASQAHgxAwgIQA/gLA4gdQA4AOApAfIgDgbQgCgaAhgEQBOgIAgBIQARgcATgkQAUgkAmgCQBUASAFBVIAFA3QDDgTgvBsIAtgZQA9AHAJA8QAEAYgIAYQCjAGg+C2QgYBEAbBEQA4CQhIBiQgUAbgZARQAPALgUANQgcASgcAKQAOAJAKAJIAzAHQAaAEgKAcQgRAtgdAfIgBABIATgJQAKgFAIgCQA6AGAKA3QAEAWgCAVQCNAQgNBvQgEAogfAgQAjBIg0AWQAYAmg3A2QgdAcgkAGQAAALgCAKQgCASgKAPIgEAFQBmBahmBLQg4ApgsAFQAJB5hqgFQAlA3hPATQg1ANg3gNQAYBNhQAPQhPAPhHgrQgCCxh+hfQABAhgGAhQgEAXgaAEQhRAPhCgrQABA4g2APQg3APgeguQACBCgpArQgeAfgYAAQgeAAgVgygAHGm0QgMgUAUgaQAVgfAjgBIAnAEQgBgeAWgoIATghQgZgegThDIgIgBQgeA/guAYQAGASgPAXQgqA+hLATIAFARIANgBQAuAaAvAYIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:184.3,y:215.4}).wait(1).to({graphics:mask_graphics_60,x:178.2,y:215.6}).wait(1).to({graphics:mask_graphics_61,x:161.4,y:223.3}).wait(1).to({graphics:mask_graphics_62,x:150.9,y:231.1}).wait(1).to({graphics:mask_graphics_63,x:147.4,y:241.6}).wait(1).to({graphics:mask_graphics_64,x:146,y:250.2}).wait(1).to({graphics:mask_graphics_65,x:146,y:257.2}).wait(1).to({graphics:mask_graphics_66,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_67,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_68,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_69,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_70,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_71,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_72,x:218.8,y:302.9}).wait(1).to({graphics:mask_graphics_73,x:218.8,y:302.9}).wait(338));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArFNxQnnkvAApBQAAlUEMlZQEsmGGPAUIAAGZQgggTgqAAQiVAAiHCuQiRC7ABELQAAEnCXC4QDVEIGKAAQE1AADljIQDFiuADioQAAgggkh0IjuA6Iv/AAIAAldIINAAQgfgtgkguQgWgwgBiRQABjOC1ieQC7ibESAAQElAACoClQCXCUAADOQAAEfhwBhQCXCaAADTQAAGgoBEsQklCrlyAAQmfAAk7jFgAFToKQABCADHAKQDCAKAAihQAAiYjIAAQjBAAgBClg");
	this.shape.setTransform(217.7,298.8,1,1,0,0,0,0,-0.1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).wait(352));

	// Layer 4
	this.instance_11 = new lib.Tween8("synched",0);
	this.instance_11.setTransform(422.5,52.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({startPosition:0,_off:false},0).to({x:482.5,alpha:1},10).wait(386));

	// Layer 11
	this.instance_12 = new lib.Tween20("synched",0);
	this.instance_12.setTransform(482.5,374.5,0.05,0.05);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(39).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).to({startPosition:0},1,cjs.Ease.get(1)).wait(364));

	// Layer 19
	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(-114,245.1,1,1,0,0,0,96,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).wait(411));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.7,0,1024.7,722.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// symbols:
(lib.aaku = function() {
	this.initialize(img.aaku);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,182);


(lib.aavu = function() {
	this.initialize(img.aavu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,182);


(lib.arati = function() {
	this.initialize(img.arati);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,182);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,965,681);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1024);


(lib.isuka = function() {
	this.initialize(img.isuka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,182);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,76);


(lib.profile_user_account_human_people_man_login = function() {
	this.initialize(img.profile_user_account_human_people_man_login);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.slate = function() {
	this.initialize(img.slate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,890,498);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.slate();
	this.instance.setTransform(-444.9,-248.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-444.9,-248.9,890,498);
p.frameBounds = [rect];


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACXBtIgFgIQgHAIgKAGQgWANggAAQgjAAgXgOQgXgOAAgXQAAgPAKAAQAHAAACAEQAEAGAIACQAMAEAgAAQA5AAAAgOQAAgUg4AAQgiAAgNgEQgYgIAAgaQAAgZAdgKIgHgDQgRgHgEgJQgEgGAAgGQAAgGAEgGQAFgIAIAAQAIAAAGAGIAZAiQAYgVAageIAXgcQAHgIAKAAQALAAAFAGQAGAHAAAKQAAAJgFAFQghAUgzAjIAAAAQBIAAAAAiQAAANgSAAQgJAAgNgOQgNgQgXAAQgTAAgQAFQgTAHAAAJQAAAPATAEQAKADAaAAQAqAAASAJQAUAKACAYQAGAIAZAAQAWAAAOgLQAPgKAAgTQAAgMgLgLQgNgNgSAAIgOAAQgTAAAAgQQAAgUAaAAQAgAAATAaQARAXAAApQAAAagRAWQgTAageAAQgYAAgOgTgAjaBoQgkgaAAgyQAAgdAQgXQASgYAbAAQASAAALAKQANALAAAVQAAAOgMAKQgMAKgTAAQgNAAgKgJQgMgLABgOIgBAAQgIAKAAAOQAAAaAbASQAbARAuAAQAmAAAYgKQAUgIAAgKQAAgEgCgEQgRAMgZACIhUAAQgJAAAAgJQAAgLAJAAIBOAAQAKAAAQgGQgbgIgHgFQgRgLAAgSQAAgmAwAAQAUAAAOAOQANAOAAAVQAAARgJAMQAJAKAAAQQAAAighATQgdASgpAAQgyAAgegWgAhjgCQAAAKAMAEIAaAIQAGgIAAgGQAAgJgHgIQgHgIgLAAQgTAAAAARgAjRgXQgGAFAAAHQAAAGAHAFQAGADAJAAQAIAAAHgDQAGgFAAgGQAAgHgHgFQgHgFgIAAQgIAAgHAFg");
	this.shape.setTransform(1.4,-7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-24,-20.4,51.1,25.8);
p.frameBounds = [rect];


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AAKU", "24px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.setTransform(-4.5,-33.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-33.7,69.5,30.9);
p.frameBounds = [rect];


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABwCGQgWgWAAgYQAAgIAFgBIgFgHQgOAggggBQgWAAgOgOQgLgPABgXQAAgUALgOQANgPAXAAQAcABALAWQANAbAiAAQApAAAAgoQAAgWgRgPQgUgSghAAIgqgBQgMgCgQgHQgSgJgHgJQgFgHABgFQAAgGAEgGQAHgIAJAAQAHABAGAFQADAFAUAcQAZgUAbggIAXgdQAJgIAJAAQAWAAAAAXQAAAJgFAGQgcAQg8AnIAGAAIAVAAQAnABAXAZQAYAZAAAtQAAAcgQAUQgPATgYAAQgbAAgRgYQAPAmAygBQAcAAAWgTQAYgUAAgfQAAgggYgbIgegdQgEgHAAgFQgBgIAJgFQAEgCANABQAOAGAPAcQAUAiAAAxQABAsgXAeQgZAfgrAAQgaAAgWgUgAAaAaQgIAHAAAJQAAAIAIAFQAIAHALAAQAMAAAIgHQAHgFAAgJQAAgJgIgGQgIgHgLAAQgLAAgIAHgAjWBQQgkgaAAgyQAAgdAQgXQASgYAbAAQATAAAKALQANAKAAAVQAAARgLAJQgMAIgUAAQgMABgLgIQgMgLABgQIgBAAQgHAMgBAOQAAAYAbASQAcARAtAAQAnAAAXgKQAUgIABgKQAAgEgDgEQgRAMgYADIhVAAQgIAAgBgKQABgLAIAAIBOAAQAKAAAQgFQgbgIgHgEQgRgLAAgTQAAgnAwAAQAVAAANAOQANAOAAAXQAAASgIAKQAIAJAAAQQAAAighATQgdASgpAAQgxAAgfgWgAhfgaQAAAMAMAEIAaAIQAHgIAAgFQAAgMgIgIQgHgIgLAAQgTAAAAARgAjNguQgFAFAAAGQAAAHAGAEQAHAFAIABQAJgBAGgFQAHgEAAgHQgBgGgGgFQgHgGgJAAQgIAAgHAGg");
	this.shape.setTransform(-9,-9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-34.1,-24.6,50.2,31);
p.frameBounds = [rect];


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AAVU", "24px Arial", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.setTransform(-43.1,-29.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-43.1,-29.1,69.6,30.9);
p.frameBounds = [rect];


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AAVU=Cow", "20px Arial", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.setTransform(-72.1,-13.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-72.1,-13.1,110.4,26.4);
p.frameBounds = [rect];


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AAKU= Leaf", "20px Arial", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.setTransform(-71.5,-13.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-13.1,114.8,26.4);
p.frameBounds = [rect];


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEA+QgigYAAguQAAgdAQgVQAQgXAZAAQARAAAMAJQAMAKgBAUQABAPgMAKQgMAJgRAAQgMAAgKgIQgLgLAAgPQgIANAAAMQAAAXAZAQQAaARAqAAQAkAAAWgJQATgIAAgKQAAgEgCgDQgQALgWACIhOAAQgJAAAAgJQAAgJAJAAIBHAAQAJAAAPgFQgYgHgIgFQgQgLAAgSQAAgkAuAAQATAAAMANQANANAAAWQAAAQgHALQAHAIAAAQQAAAfgfASQgbARgmAAQguAAgdgVgAArgmQAAALALAEIAZAIQAFgHAAgGQAAgLgGgHQgHgIgKAAQgSAAAAAQgAg7g5QgGAFAAAGQAAAGAGAFQAHAEAHAAQAIAAAHgEQAGgFAAgGQABgGgIgFQgHgGgHAAQgIAAgGAGg");
	this.shape.setTransform(0.1,-2.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-10.2,-10.6,20.7,16.8);
p.frameBounds = [rect];


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("- Ä", "25px Arial", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.setTransform(-14.3,-18.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-14.3,-18.7,36.2,32);
p.frameBounds = [rect];


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("sounds like a as in start", "25px Arial", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.setTransform(-151.2,-18.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-151.2,-18.7,265.5,32);
p.frameBounds = [rect];


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(-3.4,-1.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-178,-30.4,349.3,57.6);
p.frameBounds = [rect];


(lib.Symbol5copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B9B9B9").ss(1,1,1).p("AB/u+IKeAAIAAd9I45AAIAA99g");
	this.shape.setTransform(-32.7,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1,3,true).p("AB/tvIJQAAIAAbfIpQAAItNAAIAA7fg");
	this.shape_1.setTransform(-32.7,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D4D6D8","#DDDFE1","#F1F1F2"],[0,0.51,1],63.5,92,63.5,-102.4).s().p("AscO/IAA99IObAAIKeAAIAAd9gArNNwINMAAIJQAAIAA7gIpQAAItMAAg");
	this.shape_2.setTransform(-32.7,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.192,1],-9,3.1,0,-9,3.1,189).s().p("AAeO6QgekmgOimQgUkAgDjbQgEj8AZkZQANiVAikiIAHAAIgCdzg");
	this.shape_3.setTransform(-115.2,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.192,1],9.1,3.1,0,9.1,3.1,189).s().p("AgjO6IgC9zIAHAAQAiEiANCVQAZEZgED8QgDDbgUEAQgOCmgeEmg");
	this.shape_4.setTransform(50.3,-14.4);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AreOKIAAooIAAg0IAArRIAAg1IAAmxIOIAAICrAAIANAAIF9AAIAAGxIAAA1IAALRIAAA0IAAIog");
	mask.setTransform(-33.7,-14.9);

	// Layer 3
	this.instance = new lib.aaku();
	this.instance.setTransform(-108,-104.9);

	this.instance.mask = mask;

	this.addChild(this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-119.1,-110.8,173.5,191.9);
p.frameBounds = [rect];


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B9B9B9").ss(1,1,1).p("AMdO/I45AAIAA99IObAAIKeAAg");
	this.shape.setTransform(-32.7,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1,3,true).p("ALPNwIpQAAItNAAIAA7fINNAAIJQAAg");
	this.shape_1.setTransform(-32.7,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D4D6D8","#DDDFE1","#F1F1F2"],[0,0.51,1],63.5,92,63.5,-102.4).s().p("AscO/IAA99IObAAIKeAAIAAd9gArNNwINMAAIJQAAIAA7gIpQAAItMAAg");
	this.shape_2.setTransform(-32.7,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.192,1],-9,3.1,0,-9,3.1,189).s().p("AAeO6QgekmgOimQgUkAgDjbQgEj8AZkZQANiVAikiIAHAAIgCdzg");
	this.shape_3.setTransform(-115.2,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.192,1],9.1,3.1,0,9.1,3.1,189).s().p("AgjO6IgC9zIAHAAQAiEiANCVQAZEZgED8QgDDbgUEAQgOCmgeEmg");
	this.shape_4.setTransform(50.3,-14.4);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AreOKIAAooIAAg0IAArRIAAg1IAAmxIOIAAICrAAIANAAIF9AAIAAGxIAAA1IAALRIAAA0IAAIog");
	mask.setTransform(-33.7,-14.9);

	// Layer 3
	this.instance = new lib.aavu();
	this.instance.setTransform(-108.4,-104);

	this.instance.mask = mask;

	this.addChild(this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-119.1,-110.8,173.5,191.9);
p.frameBounds = [rect];


(lib.Symbol3 = function() {
	this.initialize();

	// llogo
	this.instance = new lib.logo();
	this.instance.setTransform(224.6,-184);

	// top_strip
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F3BB20","#F6E715"],[0,1],2.8,-44.3,2.8,35.5).s().p("EhLYAHlIAAvJMCWxAAAIAAPJg");
	this.shape.setTransform(692.6,-143.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().rs(["rgba(0,0,0,0.102)","rgba(0,0,0,0)"],[0,1],-1.1,-13.2,0,-1.1,-13.2,161.9).ss(1,1,1,3,true).p("EBGqgRqIsfAAIErCYINaAAIlmiYIk3iFEAxqgWEIA9AfIK/AAIhKgfEAyngVlIDiB2ILqAAIkNh2EA2JgTvIECCFEBQDgGYIlpi4IvvAAIGID2IPQAAEBQDgMhIr8AAIGTDRIFpAAEA+2gPSItaAAIEPCxIOcAAgEBAzgFaIxSAAIFfEnITAAAgEAqegTvIrqAAICeCFIMZAAgEAhSgRqICvCYINbAAIjxiYIMgAAEAm4gWEIAwAfIK/AAAcx1lIq9AAIBYB2ILoAAgEAkBgPSItWAAICBCxIOiAAgAcL2EIAmAfIK3AAIC2B2ILrAAAeXlaIxRAAIB3EnITEAAgEAq9gJQIvvAAIDJD2IRKAAgEAnOgMhIDvDRIPuAAIlAjRgEAiBgAzIS/AAIGrFuIUYAAEBPvAWFIgXgXI75AAIATAXEAsFAMNIYKAAIoknSI1QAAIFqHSI4BAAIDkJhIb3AAgAO9gzICPFuIVPAAIkaluEBQDAMNIr0AAILJJhIArAAEBQDAETIoDlGIIDAAEBQDgNpIjzhpA5p2EIgZAfILAAAIALgfA6C1lIq5AAIiHB2ILrAAgEghGgMhIOcAAIBMixItaAAgAxevSIA9iYIsiAAIh1CYAwhxqIA0iFIrqAAIhsCFEgvMgWEIguAfIK/AAIAigfEgpdgRqIsdAAIjyCYINcAAICziYICbiFIroAAIjQCFIshAAIEFiFIroAAIk4CFEgjkgJQIvtAAIkfD2IRPAAIC9j2ICejRIudAAIjuDRIvvAAIl6D2IRKAAIlcEnITBAAITEAAIB1knIxPAAIjqEnIkeFuIVSAAICQluITAAAIACknEgsQgPSINYAAEgpdgRqIMaAAEgv6gVlIrAAAIjcB2ILsAAgEhEsgWEIhHAfIK5AAIA7gfEhQCgPSIJBAAIEmiYIsbAAIgEAAIhIAeEg5sgPSIkTCxIOcAAIDTixEhHBgPSINVAAEhQCgJQINCAAIFBjRIujAAIjgBzEg76AWFIAEgXI0MAAEg72AVuIHfphI4FAAIjmDDA8PMNIYKAAIAAnSI1SAAIi4HSIjvJhI74AAAkDWFIgEgXI73AAIgBAXEgupAE7IluHSIYIAAEgupAE7I1PAAIokHSIjmAAEhQCAE7IMKAAIGsluIy2AAIHIknInIAAAGo2EIAMAfILAAAIgZgfEAhSgRqIsfAAIB4CYItZAAIA/CxIObAAICiDRIvtAAIvoAAIACD2IRLAAIhlj2IhQjRIucAAIAEDRIvxAAIhaD2IRNAAATMzvIrmAAIAtCFIMgAAgAG01lIAyB2IrpAAAITxqIsaAAIACCYINXAAgAkD1lIq/AAIgrB2ILqAAIAAh2IgBgfAyqshIOfAAIAGixItZAAAwhxqIMaAAIAEiFEgjkgJQIPsAAIBOjRAUEMNI4JAAIgCJhIbvAAIAQAXARME7IC4HSAG01lIq3AAAO9gzIzEAAIACFuIVRAAEhQCgMhIDgAAIFhixEhFzgVlIkLB2");
	this.shape_1.setTransform(685.7,381.5,1,1,0,0,0,0.1,-8);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFC410","#FFFAEA"],[0,0.855],0,340.5,0,-340.4).s().p("EhLYA1MMAAAhqXMCWxAAAMAAABqXg");
	this.shape_2.setTransform(692.6,148.5);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(173.3,-191.9,1024.7,722.8);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;