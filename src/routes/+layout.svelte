<script>
    import "../app.css";
    import { supabase } from '../supabase.js'
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
    import Auth from "../components/Auth.svelte";
    import { loadTodos } from "../stores/todoStore";
	import Register from "../components/Register.svelte";
  
  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
      loadTodos();
    }
  })
    
  </script>
  
<div class="container mx-auto my-6 max-w-lg">
    <slot></slot>
</div>