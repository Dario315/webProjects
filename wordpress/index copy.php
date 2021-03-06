<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 */

get_header(); ?>

		<div id="primary">
			<div id="content" role="main">

			<?php if ( have_posts() ) : ?>

				<?php
				// The Query
				$the_query = new WP_Query( 'cat=4' );
				
				// The Loop
				while ( $the_query->have_posts() ) : $the_query->the_post();
					echo '<div id="bikes">';
					the_title();
					the_content();
					echo '</div>';
				endwhile;
				
				// Reset Post Data
				wp_reset_postdata();
				
				?>
				
				<?php
				// The Query
				$the_query = new WP_Query( 'cat=3' );
				
				// The Loop
				while ( $the_query->have_posts() ) : $the_query->the_post();
					echo '<div id="cars">';
					the_title();
					twentyeleven_posted_on();
					echo '</div>';
					
				

				endwhile;
				
				// Reset Post Data
				wp_reset_postdata();
				
				?>

			<?php else : ?>

				<article id="post-0" class="post no-results not-found">
					<header class="entry-header">
						<h1 class="entry-title"><?php _e( 'Nothing Found', 'twentyeleven' ); ?></h1>
					</header><!-- .entry-header -->

					<div class="entry-content">
						<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'twentyeleven' ); ?></p>
						<?php get_search_form(); ?>
					</div><!-- .entry-content -->
				</article><!-- #post-0 -->

			<?php endif; ?>

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>