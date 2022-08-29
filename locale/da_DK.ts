export default {
	locale: "Dansk (Danmark)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Lær mere",
		more: "Mere",
		retry: "Prøv igen",
		back: "Tilbage",
		download: "Download | Downloads",
		features: "Funktioner",
		comments: "Kommentarer",
		search: "Søg",
		update: "Opdater",
		report: "Rapporter",
		delete: "Slet",
		cancel: "Annuller",
		submit: "Indsend",
		activity: "Aktivitet",
		loading: "Indlæser",
		save_changes: "Gem ændringer",
		reset: "Nulstil",
		object: {
			user: "Bruger",
			emote_set: "Emote sæt",
			emote: "Emote",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "Emote platformen for alle",
		app_description: "Tilføj hundredvis af emotes til dine Twitch eller YouTube kanaler med lethed",
		why_app: "Hvorfor @:common.appName{'?'}",
		download_browser: "Browserudvidelse",
		download_mobile: "Mobil apps",
		download_misc: "Andre apps",
		features: {
			emote_sets: {
				name: "Emote sæt",
				detail: "Group emotes in customizable sets that can be shared with other users or quickly swapped onto your channel.",
			},
			many_emote_slots: {
				name: "Hundredvis af emote slots",
				detail: "Start med {0} slots, med et muligt maksimum på {1} og ingen paywall.",
			},
			channel_emote_names: {
				name: "Per-kanal emote navne",
				detail: "Kan du ikke lide navnet givet til en emote af dens forfatter? Intet problem, du kan ændre det kun for din kanal.",
			},
			real_time: {
				name: "Realtid",
				detail: "Ændring af emotes i din kanal sker med det samme, for alle seere. Ingen F5 krævet.",
			},
			emote_versions: {
				name: "Emote versionering",
				detail: "Skift mellem tematiserede varianter eller opdater en emote til en forbedret version.",
			},
			userbase: {
				name: "Large Community",
				detail: "@:common.appName serves {0}+ daily unique users and has a library of over {1} public emotes",
			},
			next_gen: {
				name: "Next-gen billedformater som WEBP og AVIF",
				detail: "Vi bruger nyere og mere optimerede billedformater til at reducere brugen af data.",
			},
			source_available: {
				name: "Kildetilgængelig",
				detail: "Hele vores kodebase er tilgængelig på GitHub med en kildetilgængelig licens. Alle kan se og bidrage.",
			},
		},
		socials: {
			discord: "Deltag med andre @:common.appName brugere på Discord",
			discord_online_count: "{0} online nu",
			twitter: "Følg os på Twitter",
			github: "Contribute",
		},
		legal: {
			terms: "Terms of Service",
			privacy: "Privacy Policy",
			unaffiliated: "@:common.appName is not affiliated with Twitch Interactive",
		},
	},
	// Nav Bar
	nav: {
		home: "Hjem",
		about: "Om",
		emotes: "Emotes",
		store: "Abonner",
		admin: "Admin",
		sign_in: "Log på",
		user_search: "Søg profiler",
		wip_notice: {
			heading: "Velkommen til den nye @:common.appName hjemmeside",
			text1: "This is an early preview of the next way to experience @:common.appName{'.'}",
			text2: "Explore what's new and give us some feedback! Note it will be undergoing rapid changes and may break frequently.",
		},
	},
	activity: {
		emote_created: "Oprettede {T}",
		emote_renamed: "Omdøbte {T} fra {O} til {N}",
		emote_listing_approved: "Godkendte {T} til offentlig visning",
		emote_listing_revoked: "Fjernede {T} fra offentlig visning",
		emote_merged: "Sammenflettet {T} til {0}",
		emote_ownership_transferred: "Overførte ejerskab af {T} til {U}",
		emote_restored: "Gendannede {T}",
		emote_updated: "Ændrede egenskaber for {T}",
		emote_deleted: "Slettede {T}",
		emote_tags_updated: "Set tags for {T}: {N}",
		emote_processed: "Udførte et nyt behandlingsjob af {T}",
		emote_version_created: "Oprettet version '{VER}' af {T}",
		emote_version_renamed: "Omdøbte version '{VER}' af {T} fra {1} til {2}",
		emote_version_approved: "Godkendte version '{VER}' af {T} til offentlig visning",
		emote_version_restored: "Gendannede version '{VER}' af {T}",
		emote_version_deleted: "Slettede version '{VER}' af {T}",
		emote_flag_added: "Added flag {FLAG} to {T}",
		emote_flag_removed: "Removed flag {FLAG} from {T}",
		user_created: "Oprettede {T}",
		user_deleted: "Slettede {T}",
		user_editor_added: "Tilføjede {U} som redaktør",
		user_editor_added_other: "Tilføjede {U1} som redaktør af {U2}",
		user_editor_updated: "Updated editor privileges for {U}",
		user_editor_updated_other: "Updated editor privileges for {U1}, an editor of {U2}",
		user_editor_removed: "Revoked {U}'s editor privileges",
		user_editor_removed_other: "Revoked {U1}'s editor privileges to {U2}",
		user_banned: "Bandlyste {T}",
		user_unbanned: "Ubandlyste {T}",
		user_updated: "Ændrede egenskaber for {T}",
		user_sign_in: "{T} har logget ind",
		user_sign_out: "{T} har logget ud",
		user_forbidden: "{T} blev nægtet adgang til {0}",
		emote_set_created: "Oprettede {T}",
		emote_set_emote_added: "Tilføjede emote {AE} til {T}",
		emote_set_emote_removed: "Fjernede emote {AE} fra {T}",
		emote_set_emote_renamed: "Omdøbte emote {AE} fra {O} til {N} i {T}",
		emote_set_updated: "Ændrede egenskaber for {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Tilføj emote",
		author: "Tilføjet af",
		created_at: "Oprettet",
		versions: "Versioner",
		preview_loading: "Indlæser forhåndsvisninger... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Kunne ikke indlæse forhåndsvisninger",
		processing: "Behandler emote - dette kan tage noget tid.",
		use: "Brug emote",
		use_menu: "Add this emote to...",
		switch_version: "Skift til denne version",
		in_n_sets: "i {0} sæt | i {0} sæt",
		disable: "Deaktiver emote",
		properties: "Properties",
		new_version: "New Version",
		report: "Rapporter emote",
		Privacy: "Privacy",
		comments: "Kommentarer",
		channels: "Kanaler",
		common_names: "Andre navne for denne emote",
		usage_stats: "Emote statistik",
		no_longer_available: "Denne emote er ikke længere tilgængelig",
		tags: "Tags",
		add_tag: "Tilføj tag",
		trending_rank: "#{0} on Trending",
		avif_no_support:
			"Sorry, {BROWSER} does not support the AVIF format. Try updating to a newer version or try with a different browser.",
		delete_prompt: {
			heading: "Slet {0}",
			heading_versions: "Slet version '{0}' af {1}",
			notice: "Are you sure you want to delete the emote {0}{'?'}",
			notice_versions: "Are you sure you want to delete the version '{0}' from {1}{'?'}",
			reason: "Reason for deletion",
		},
		properties_prompt: {
			heading: "Edit {0}",
		},
		unlisted: {
			heading: "Vær opmærksom!",
			warning: "Denne emote er ikke offentligt vist.",
			warning_flagged: "Denne emote er blevet fjernet af følgende årsager: {FLAG_LIST}",
			notice: "It can be added to your channel, but we cannot verify if it is safe to show on a livestream.",
			notice_flagged: "It can be added to your channel, however we believe it is unsafe to show on a livestream.",
			show_button: "Vis emote",
			flag_sexual_content: "Sexual or sexually suggestive content",
			flag_epilepsy: "Hurtig blinkende / anfaldsfremkaldende",
			flag_edgy: "Edgy eller usmageligt",
			flag_twitch_banned: "Ikke tilladt på Twitch",
		},
		list: {
			searching: "Søger",
			emote_count: "{0} emotes",
			no_emotes_listed: "Ingen emotes fundet",
			fetching_slowly: "Beklager, det ser ud til at det tager et stykke tid",
			category: {
				name: "Kategori",
				top: "Top",
				trending: "Trending",
				featured: "Featured",
				global: "Globale",
				new: "Nye",
			},
			filters: {
				case_sensitive: "Case Sensitive",
				exact_match: "Exact Match",
				ignore_tags: "Ignore Tags",
			},
		},
		upload: {
			emote_name: "Emote navn",
			version_name: "Versionsnavn",
			version_description: "Versionsbeskrivelse",
			submit_emote: "Indsend emote",
			create_emote_version: "Opret emotesversion",
			image_upload: "Billed upload",
			accepted_formats: "Godkendte formater",
			filetype: "Fil",
			animation: "Animation",
			transparency: "Gennemsigtighed",
			emote_details: "Emotesdetaljer",
			version_details: "Versionsdetaljer",
			attribution: "Attribution",
			original_creator: "Oprindelig skaber",
			as_child: "Du opretter en {IS_DIVERGED} version af {0}. ",
			content_moderation: "Indholdsmoderering",
			half_transparency_tooltip:
				"Pixels can only be fully transparent or fully opaque (no variable transparency)",
		},
	},
	emote_set: {
		create: "Ny @:common.object.emote_set",
		select: "Vælg @:common.object.emote_set",
		explain: {
			section: "Hvad er emote sæt?",
			hint: "Emote sæt er en samling af emotes, som kan være bundet til dine kanaler eller deles med andre brugere.",
		},
		no_space: "Sæt fuld",
		none_selected: "Intet set valgt",
		editing: "Redigerer {0}",
		owner: "{USER}'s emote sæt",
		owned: "Ejet emote sæt",
		label_renamed: "Omdøbt",
		label_conflict: "Konflikt",
		label_default: "Standard",
		label_actor: "Enabled by {0}",
		// "enabled by <display_name of actor>"
		context_emote_add: "Add to {SET_NAME}",
		context_emote_remove: "Remove from {SET_NAME}",
		modal: {
			selected_channel_count: "ingen kanal valgt - {0} kanal valgt - {0} kanaler valgt",
			create_button: "Opret @:common.object.emote_set",
			rename_in_set: "Omdøb i {0}",
			context_rename: "Tilpas emote navn",
			context_set_default: "Tilknyt som standard",
			context_unset_default: "Fjern som standard",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Emote sæt",
		channel_emotes: "Kanal emotes",
		joined_at: "Joined {0}",
		editors: "Redaktører",
		roles: "Roller",
		connections: "Channels | Channels & Accounts",
		new_connections: "Link accounts...",
		add_editor: "Add Editor",
		editor_modal_heading: "Modify {0}'s Editors",
		editor_modal_user_search: "Who would you like to add as an editor?",
		editor_modal_user_update: "Editor",
		no_channel_emotes: "{0} har ingen emotes på deres {1} kanal",
		no_channels: "{0} har ingen kanaler tilsluttet!",
		card: {
			view_full_profile: "Vis fuld profil",
		},
		settings: {
			button: "Rediger profil",
			section_profile: "Profil",
			username: "Brugernavn",
			display_name: "Visningsnavn",
			profile_picture: "Profilbillede",
			section_badges: "Badges",
			section_paints: "Paints",
			no_badges: "You do not own any badges",
			no_paints: "You do not own any paints",
			sign_out: "Sign Out",
		},
		editor_permissions: {
			modify_emotes: "Modify Channel Emotes",
			use_private_emotes: "Use Private Emotes",
			manage_profile: "Manage Profile",
			manage_owned_emotes: "Manage Owned Emotes",
			manage_emote_sets: "Manage Emote Sets",
			manage_billing: "Manage Billing",
			manage_editors: "Manage Editors",
			view_messages: "View Messages",
		},
	},
	store: {
		subscribe_cta: "Become a @:common.appName Subscriber!",
		subscribed: "Thank you for subscribing",
		button_self: "Subscribe",
		button_gift: "Gift a sub",
		billing_information_heading: "Billing Information",
		payment_information_heading: "Payment Information",
		payment_gift_heading: "Select the recipient for this gift",
		payment_methods: "Payment Methods",
		payment_methods_hint: "Choose a payment method",
		payment_method_paypal: "PayPal",
		payment_method_stripe: "Credit Card",
		payment_popup_cta: "Complete the transaction in the new window",
		pay_button: "Pay via {0}",
		product_type_subscription: "Subscription",
		purchase_success: {
			heading: "Purchase Successful",
			text1: "We've received your payment and your subscription has been activated.",
			text2: "Thank you for your support! If you have any questions, please contact us via the methods provided on this page.",
		},
		sub: {
			incentive: "You'll get...",
			creator_tier: "Extras for creators",
			creator_tier_desc: "Upgrade to the Creator tier and get extra coolness for your channel",
			feature_t1_badge: "Subscriber Badge",
			feature_t1_paints: "Nametag Paints",
			feature_t1_animated_profile_picture: "Animated Profile Picture",
			feature_t1_zero_width: "Zero Width Emotes",
			feature_t1_global_raffle: "Global Emote Raffle Ticket",
			feature_t1_personal_emotes: "Personlige emotes",
			feature_t2_animated_profile_banner: "Animated Profile Banner",
			feature_t2_animated_offline_screen: "Animated Offline Screen",
			feature_t2_extended_sub_emotes: "Extended Sub Emotes",
			current_plan: "Dit abonnement",
			cancel: "Forny ikke",
			update_payment: "Update Payment Method",
			reactivate: "Genaktivér abonnement",
			cancel_prompt: "Are you sure you want to cancel your subscription?",
			state_heading: "Your Subscription",
			state_badge_progress: "Badge Progress",
			state_paints: "Paints",
			state_anniversary:
				"Your Sub anniversary is today | Your next anniversary is in {0} day | Your next Sub anniversary is in {0} days",
			state_age:
				"You subscribed today | You've been subscribed for {0} day | You've been subscribed for {0} days",
			state_ending: "Your sub ends today | Your sub ends in {0} day | Your sub ends in {0} days",
			state_collection_heading: "Collection",
			state_paints_heading: "Unlocked Paints ({0})",
			state_raffle: "Global Emote Raffle",
			state_leaderboards: "Top Gifters",
			raffle: {
				starts_at: "{0} days",
				starts_at_hint: "The next sub raffle begins on {0}",
			},
		},
	},
	// Text that is relating to the reporting system
	reporting: {
		report: "Rapporter",
		emote_reason: {
			i_made_this: "Jeg lavede denne emote, men den blev uploadet af en anden",
			duplicate: "Denne emote er en duplikat",
			pornographic: "Denne emote indeholder pornografiske eller alt for seksualiserede billedsprog",
			violence_gore: "Denne emote viser ekstrem vold eller blod",
			i_appear_there: "Denne emote skildrer mig og jeg kan ikke lide det",
			offensive: "Jeg finder denne emote stødende",
			other: "Noget andet",
		},
		uncategorized_prompt: "Hvad er sagen?",
		details: "Oplysninger (yderligere oplysninger og/eller bevis for din rapport)",
		success: "Rapporten blev indsendt",
		notify: "Du får besked via indbakken, når din rapport håndteres eller der anmodes om yderligere oplysninger.",
		complete_step_one: "Fortsæt",
		abuse_notice: "Misbrug af rapportfunktionen kan medføre, at din adgang suspenderes.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Indbakke",
		tabs: {
			all: "Alle beskeder",
			unread: "Ulæste",
			important: "Vigtige",
		},
		unread_tag: "Ulæst",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Emote godkendt til visning",
				content: `
# Din emote "{EMOTE_NAME}" blev godkendt til visning \n
Den vil nu være tilgængelig i Emote-katalogen og vil begynde at dukke op på @:common.appHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Emote ikke godkendt til visning",
				content: `
# Din emote "{EMOTE_NAME}" blev afvist
Den vil ikke være tilgængelig via det offentlige Emote-katalog eller synlig på @:common.appHost, men forbliver tilgængelig for brugere med linket.
`,
			},
			emote_ownership_claim_request: {
				subject: "Invitation til at blive ejer af en emote",
				content: `
## {OWNER_DISPLAY_NAME} Ønsker at give dig ejerskab over: '{EMOTE_NAME}'

[Vis emote]({EMOTE_URL})

**[Accepter invitation]({EMOTE_CLAIM_URL})** | [Afslå invitation]({EMOTE_DECLINE_URL})`,
			},
			client_banned: {
				subject: "Du er blevet bandlyst",
				reason: {
					pornographic_content: "",
				},
				content: `
# Konto bandlyst
Din adgang til @:common.appName er nu begrænset.<br/><br/>
### Årsag til denne handling
{BAN_REASON} <br/><br/>
### Begrænsninger anvendt<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>Din suspendering udløber d. **{BAN_EXPIRE_AT}**.
_Hvis du mener, at dette er en fejl, kan du kontakte @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* Du kan ikke længere interagere med appen",
					no_auth: "* Du kan ikke længere logge ind",
					no_ownership: "* Alt indhold, du har oprettet, vil ikke længere være tilgængeligt",
					memory_hole: "* Du vil ikke være synlig for andre brugere",
					ip_blocked: "* Din IP er blokeret fra at få adgang til alle @:common.appName tjenester",
				},
			},
			report_closed: {
				subject: "Report closed",
				content: `
Thank you for notifying us, your report {'#'}{CASE_ID} has been handled.
				`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "Vi kunne ikke finde det",
		doctor_wtf: "Hvad helvede er dette?",
		pot_friend: "Jeg er en krukke, ven",
	},
};
