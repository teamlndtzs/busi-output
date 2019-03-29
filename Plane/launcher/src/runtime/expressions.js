var ls;
(function (ls) {
	ls.GameScene = function() {
		return {
			"BOSS": function() { return BOSS },
			"%22ty%22": function() { return "ty" },
			"BOSS%E5%AD%90%E5%BC%B9": function() { return BOSS子弹 },
			"%22GameOverScene%22": function() { return "GameOverScene" },
			"%E8%A1%80": function() { return 血 },
			"%22tx%22": function() { return "tx" },
			"Touch.touchSceneY": function() { return Touch.touchSceneY },
			"hero.score": function() { return hero.score },
			"(BOSS.HP%2F100)*200": function() { return (BOSS.HP/100)*200 },
			"%E6%95%8C%E4%BA%BA%E5%AD%90%E5%BC%B9": function() { return 敌人子弹 },
			"%22hy%22": function() { return "hy" },
			"100%2Bls.random()*50": function() { return 100+ls.random()*50 },
			"Touch.touchSceneX": function() { return Touch.touchSceneX },
			"%22equalTo%22": function() { return "equalTo" },
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"300%2Bls.random()*50": function() { return 300+ls.random()*50 },
			"%22HP%22%2Bhero.HP": function() { return "HP"+hero.HP },
			"%E6%95%8C%E4%BA%BA": function() { return 敌人 },
			"%22score%22": function() { return "score" },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"System.hy%2B(Touch.touchSceneY-System.ty)": function() { return System.hy+(Touch.touchSceneY-System.ty) },
			"%22greaterThan%22": function() { return "greaterThan" },
			"%E8%8B%B1%E9%9B%84%E5%AD%90%E5%BC%B9": function() { return 英雄子弹 },
			"%22HP%22": function() { return "HP" },
			"%22hx%22": function() { return "hx" },
			"%22lessThan%22": function() { return "lessThan" },
			"hero": function() { return hero },
			"hero.x": function() { return hero.x },
			"40%2Bls.random()*340": function() { return 40+ls.random()*340 },
			"%22movetag%22": function() { return "movetag" },
			"System.hx%2B(Touch.touchSceneX-System.tx)": function() { return System.hx+(Touch.touchSceneX-System.tx) },
			"hero.y": function() { return hero.y }
		}
	};
	ls.GameOverScene = function() {
		return {
			"%22bounceOut%22": function() { return "bounceOut" },
			"%22GameScene%22": function() { return "GameScene" },
			"%22tween%22": function() { return "tween" }
		}
	};
	ls.MainScene = function() {
		return {
			"%22GameScene%22": function() { return "GameScene" },
			"%22elasticOut%22": function() { return "elasticOut" },
			"%22t1%22": function() { return "t1" },
			"%22bounceOut%22": function() { return "bounceOut" },
			"%22tween%22": function() { return "tween" }
		}
	};
})(ls || (ls = {}));