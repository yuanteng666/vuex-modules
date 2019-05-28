<template>
	<view class="content">
		<text>{{num}}</text>
		<view class="">
			<text v-show="isCanShow">我是footer</text>
		</view>
		<button type="primary" @tap="hideFooter">hide footer</button>
		<button type="primary" @tap="showFooter">show footer</button>
		
		<button type="primary" @tap="getNewNum(666)">改变数值</button>
	</view>
</template>

<script>
	import{
		mapGetters,
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log('store',this.$store)

		},
		methods: {
			//解构
			...mapActions('footers',['getNewNum','hideFooter','showFooter'])
		},
		computed:{
			//  ...mapState({
			// 	isCanShow:state=>state.footers.showFooter,
			// 	num:state=>state.footers.changableNum
			// }),
			////你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
			...mapGetters('footers',{
				isCanShow:'isShow',
				num:'getChangedNum'
			})
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
